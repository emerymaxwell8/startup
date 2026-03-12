import React from 'react';
import './post.css';
import {getName, getPlan} from '../service.js';

export function Post({userName}) {
    const [posts, setPosts] = React.useState([]);
    const [userPlan, setUserPlan] = React.useState('');

    function fetchPosts() {
        fetch('/api/posts')
            .then((response) => response.json())
            .then((posts) => {
            setPosts(posts);
            });
    }

    React.useEffect(() => {
        fetchPosts();
    }, []);

    async function addPostEntry(name, plan) {
        const post = { id: Date.now(), name, plan, likes: 0, isFavorite: false };

        await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(post),

        });

        fetchPosts();

    }

    async function addLike(id) { 
        const res = await fetch('/api/posts/like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ id }),
        });

        fetchPosts();
    }

    
    async function addFavorite(id) {
        const res = await fetch('/api/favorites', {
            method: 'POST',
            headers: {  'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ id }),
        });
    }


    React.useEffect(() => {
        const interval = setInterval(async () => await addPostEntry(getName(), getPlan()), 10000);
        
        const interval2 = setInterval(async () => {
            const res = await fetch('/api/posts', {credentials: 'include'});
            const updatedPosts = await res.json();
            if (updatedPosts.length === 0) return;
            const randomIndex = Math.floor(Math.random() * updatedPosts.length);
            const postId = updatedPosts[randomIndex].id;   
            await addLike(postId);
        }, 3000);
        
        
        return () => {
            clearInterval(interval);
            clearInterval(interval2);
        };
    }, []);

 
    return (
    <main className="main-post">
      <div>
      <h1 id='y-name' className="title">Your Name: <span id="name">{userName}</span></h1>
      </div>
        <div className = "user-post input-group mb-1 align-items-center gap-3">
            <span className="input-group-text">Plan for dinner?</span>
            <input id = 'prompt' className="form-control" type="text" onChange={(e) => setUserPlan(e.target.value)}placeholder="Write here..." />
            <button type="submit" className="btn btn-dark" onClick={() => addPostEntry(userName, userPlan)}>POST</button>
        </div>
      <h1 className="title">OTHERS:</h1>
        <table className="others table table-primary table-striped-columns">
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>PLANS</th>
                    <th>LIKES</th>
                    <th>ADD TO FAVORITES</th>
                </tr>
            </thead>
            <tbody>
                {posts && posts.length ? (posts.map((row) => (
                    <tr key={row.id}>
                        <td>{row.name}</td>
                        <td>{row.plan}</td>
                        <td>
                            <button type='button' className = 'me-2 btn btn-outline-danger' onClick={() => addLike(row.id)}>
                                <svg width="15" height="15" viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M60 100
                                    C60 100, 10 70, 10 35
                                    C10 15, 30 5, 45 20
                                    C55 30, 60 40, 60 40
                                    C60 40, 65 30, 75 20
                                    C90 5, 110 15, 110 35
                                    C110 70, 60 100, 60 100 Z"
                                    fill="pink"/>
                                </svg>
                            </button>
                            <span>{row.likes}</span>
                        </td>
                        <td>
                            <button type='button'className="btn btn-outline-dark" onClick={() => addFavorite(row.id)}>+</button>
                        </td>
                    </tr>
                )) ) : (
                    <tr>
                        <td colSpan="4">No posts yet. Be the first to share your dinner plans!</td>
                    </tr>
                )}
    
            </tbody>
        </table> 
    </main>
  );
}