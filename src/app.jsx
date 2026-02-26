import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Post } from './post/post';
import { Favorites } from './favorites/favorites';
import { About } from './about/about';
import { AuthState } from './login/authState';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);
  return (
    <BrowserRouter>
        <div className="app">
            <header>
                <nav className="navbar">
                    <h1 className="navbar-brand fs-2 text-white">TASTY MEALS</h1>
                    <menu className="navbar-nav">
                        <li className="nav-item"><NavLink className ="nav-link" to=''>HOME</NavLink></li>
                        {authState == AuthState.Authenticated && <li className="nav-item"><NavLink className="nav-link" to='post'>POST</NavLink></li>}
                        {authState == AuthState.Authenticated && <li className="nav-item"><NavLink className="nav-link" to='favorites'>FAVORITES</NavLink></li>}
                        <li className="nav-item"><NavLink className="nav-link" to='about'>ABOUT</NavLink></li>
                    </menu>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Login 
                    userName={userName}
                    authState={authState}
                    onAuthChange={(UserName, authState) => {
                      setAuthState(authState);
                      setUserName(UserName);
                    }}
                />
                } 
                exact 
                />
                <Route path='/post' element={<Post />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer className = 'text-white'>
                <div>
                    <span>Emery Maxwell</span>
                    <a href="https://github.com/emerymaxwell8/startup.git">GitHub</a>
                </div>
            </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid text-center">404: Return to sender. Address unknown.</main>;
}