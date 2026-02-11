import React from 'react';
import './about.css';

export function About() {
  return (
    <main className="text-center">
        <h1 className="title">ABOUT</h1>
        <p className="text-white">
            Tasty Meals is an app where you can post what you are planning on eating for dinner 
            and see what your friends and others are eating as well!
            You can also save other people's posts that you love, 
            so that you can look back at your favorites for meal planning inspiration!

            Hope you enjoy all of your future tasty meals!
        </p>
        <div className = "picture-section"> 
            <img className="picture" width="200px" src="burger-holder.jpg" alt="burger" />
            <img className="picture" width="200px" src="pasta-holder.jpg" alt="pasta" />
        </div>
    </main>
  );
}