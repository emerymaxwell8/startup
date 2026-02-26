import React from 'react';
import './post.css';
import {getName, getPlan} from '../service.js';

export function Post() {
    const [posts, setPosts] = React.useState([]);

    function addPost() {
        const newPost = {
            name: getName(),
            plan: getPlan(), 
            likes: 0,
            plus: ''
        }
        setPosts(prevPosts => [...prevPosts, newPost]);
    }

    React.useEffect(() => {
        const interval = setInterval(addPost, 5000);
        return () => clearInterval(interval);
    }, []);
 
    return (
    <main className="main-post">
      <div>
      <h1 id='y-name' className="title">Your Name: <span id="name">nameofuser</span></h1>
      </div>
      <form method="get" action = "post">
        <div className = "user-post input-group mb-1 align-items-center gap-3">
            <span className="input-group-text">Plan for dinner?</span>
            <input id = 'prompt' className="form-control" type="text" placeholder="Write here..." />
            <button type="submit" className="btn btn-dark">POST</button>
        </div>
      </form>
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
                <tr>
                    <td>Lily</td>
                    <td>McDonalds!</td>
                    <td>
                        <button type='button' className = 'me-2 btn btn-outline-danger'>
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
                        <span>4</span>
                    </td>
                    <td>
                        <button type='button 'className="btn btn-outline-dark">+</button>
                    </td>
                </tr>
                <tr>
                    <td>Danny</td>
                    <td>I'm making spaghetti</td>
                    <td>
                        <button type='button' className = 'me-2 btn btn-outline-danger'>
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
                        <span>2</span>
                    </td>
                    <td>
                        <button type='button 'className="btn btn-outline-dark"lass="add">+</button>
                    </td>
                </tr>
                <tr>
                    <td>Spencer</td>
                    <td>Trying Pancakes</td>
                    <td>
                        <button type='button' className = 'me-2 btn btn-outline-danger'>
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
                        <span>10</span>
                    </td>
                    <td>
                        <button type='button 'className="btn btn-outline-dark">+</button>
                    </td>
                </tr>
            </tbody>
        </table> 
    </main>
  );
}