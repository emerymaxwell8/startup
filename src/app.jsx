import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="app">
      <header>
            <nav className="navbar">
                <h1 className="navbar-brand fs-2 text-white">TASTY MEALS</h1>
                <menu className="navbar-nav">
                    <li className="nav-item"><a className ="nav-link active" href="index.html">HOME</a></li>
                    <li className="nav-item"><a className="nav-link" href="post.html">POST</a></li>
                    <li className="nav-item"><a className="nav-link" href="favorites.html">FAVORITES</a></li>
                    <li className="nav-item"><a className="nav-link" href="about.html">ABOUT</a></li>
                </menu>
            </nav>
        </header>

      <main>App components go here</main>

      <footer className = 'text-white'>
            <div>
                <span>Emery Maxwell</span>
                <a href="https://github.com/emerymaxwell8/startup.git">GitHub</a>
            </div>
        </footer>
    </div>
  );
}