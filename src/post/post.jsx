import React from 'react';
import './post.css';
import {getName, getPlan} from '../service.js';

export function Post({userName}) {
    const [posts, setPosts] = React.useState([]);
    const [userPlan, setUserPlan] = React.useState('');
    let count = 0;

    function addPost() {
        const newPost = {
            id: Date.now(),
            name: getName(),
            plan: getPlan(), 
            likes: 0
        }
        setPosts(prevPosts => [...prevPosts, newPost].slice(-8));
        
    }

    function addUserPost() {
        const userPost = {
            id: Date.now(),
            name: userName, 
            plan: userPlan, 
            likes: 0
        }
        setPosts(prevPosts => [...prevPosts, userPost].slice(-8));
    }

    function addLike(id) {
        setPosts(prevPosts => {
            return prevPosts.map(row => {
                if (row.id === id) {
                    return {...row, likes: row.likes + 1};
                }
                return row;
            });
        });
    }


    function addRandomLike() {
        setPosts(prevPosts => {
            if (prevPosts.length === 0) {
                return prevPosts;
            }  
            const randomIndex = Math.floor(Math.random() * prevPosts.length);
            const updatedPosts = [...prevPosts];
            updatedPosts[randomIndex].likes += 1;
            return updatedPosts;
    })}


    React.useEffect(() => {
        const interval = setInterval(addPost, 10000);
        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        const interval = setInterval(addRandomLike, 5000);
        return () => clearInterval(interval);
    }, []);
 
    return (
    <main className="main-post">
      <div>
      <h1 id='y-name' className="title">Your Name: <span id="name">{userName}</span></h1>
      </div>
        <div className = "user-post input-group mb-1 align-items-center gap-3">
            <span className="input-group-text">Plan for dinner?</span>
            <input id = 'prompt' className="form-control" type="text" onChange={(e) => setUserPlan(e.target.value)}placeholder="Write here..." />
            <button type="submit" className="btn btn-dark" onClick={() => addUserPost()}>POST</button>
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
                {posts.map(row => (
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
                            <button type='button 'className="btn btn-outline-dark">+</button>
                        </td>
                    </tr>
                ))}
    
            </tbody>
        </table> 
    </main>
  );
}