import React from 'react';
import './about.css';
import {getImage} from '../service.js';

export function About() {

  const [image1, setImage1] = React.useState("");
  const [image2, setImage2] = React.useState("");

  function updateImage() {
      const image1 = getImage();
      const image2 = getImage();
      setImage1(image1);
      setImage2(image2);
  }

  React.useEffect(updateImage, []);

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
            <img className="picture" width="200px" src={image1} alt="random image" />
            <img className="picture" width="200px" src={image2} alt="random image" />
        </div>
    </main>
  );
}