import React from 'react';
import './about.css';

export function About() {

  const [image1, setImage1] = React.useState(null);
  const [image2, setImage2] = React.useState(null);

  React.useEffect(() => {
    const foodCategories = ["biryani", "burger", "dessert", "idly", "pasta", "pizza", "rice", "samosa"];
    const randomCategory1 = foodCategories[Math.floor(Math.random() * foodCategories.length)];
    const randomCategory2 = foodCategories[Math.floor(Math.random() * foodCategories.length)];
    fetch(`https://foodish-api.com/api/images/${randomCategory1}`)
      .then((response) => response.json())
      .then((data) => {
        setImage1(data.image);
      })
      .catch();

      fetch(`https://foodish-api.com/api/images/${randomCategory2}`)
      .then((response) => response.json())
      .then((data) => {
        setImage2(data.image);
      })
      .catch();
  }, []);

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