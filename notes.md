# CS 260 Notes

[My startup - Tasty Meals](https://startup.tastymeals.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 100.52.80.144
Everything worked correctly once I switched my email address to my BYU one. I had some weird complications with switching to an elastic IP but when I switched my email, it worked out. I thought it was really interesting all of the components to creating a website that is servicable and secure. 

## Caddy

I had a little confusion on how to edit the Caddy and save changes in the console window but after a little investigation I figured it out. The instructions were very useful [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

Practicing with the CodePen helped me learn the difference between the structural elements. I want to make sure to remember to use the div and the nav elements to divide my text into smaller units. I also find the input elements super cool and will be referring to the CodePen to help include those elements into my startup.

Creating a SVG image was really interesting. I learned that it works on a grid system and thats what allows it to create individual shapes. It can get super complex but I'm excited to see how I will be able to animate the heart below later in the creation process.

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

HTML was pretty simple to think through but sometimes feels a little messy. It also can be hard sometimes to visualize how the application will look in the future with just the structual elements. But I feel pretty confident in how my structure turned out.

## CSS

This ended up taking a lot longer than I thought it would. I spent a lot of time fixing tiny elements. 

After reviewing the code for Simon, I realized I need to be very specific for all of my elements. This means putting most elements into different classes that I can work in. I also saw that it is better to create different css files for each of the pages. 

Have to make sure to get rid of html styling so it doesn't mess with css styling

Had to specific the text color specifically with each element, not sure if there is a better way to do that

In order to help with overflow, I included a flex-wrap to my body.

I found the animation super interesting and though I didn't get a lot of time to look at it, I want to include more animation elements into my startup in the future.

I had to make sure to specify flex growth and shrink to improve overflow as well

Bootstrap has so many cool aspects to it!! I loved the individual buttons. I learned you need to include gap in the class name to make sure there is a gap between your button and other elements 

## React Part 1: Routing

I should spend more time learning the JavaScript for React Part 2: I'm going to refer back to this page in the future[JavaScript-Instructions]https://github.com/webprogramming260/webprogramming/blob/main/instruction/javascript/introduction/introduction.md

Remember that with somethings you debug using VS code and other things you debug using the console window

Vite host allows us to see the result in the browser. A router allows for there only to be one HTML page

It was cool going through the steps and seeing how it can all be put together! I like how much cleaner it looks with just a single HTML file loading. 

The process was relatively easy. I accidently loaded my node_module files to github so I spent a little bit trying to fix that. I need to remember in the future to add that to the gitignore. Once I got things to the console, the css was not working very well because of how Bootstrap was implementing things. I had to change some of the css in order to make it work with Bootstrap React. But other than that it was a simple process. 

## React Part 2: Reactivity

There was a lot of information to learn and I'm not sure if I understand a lot of it but I understand the basic principles

.useState allows for a variable to be updated automatically
localStorage allows access to the local storage (can use .getItem or .setItem)

.useEffect was used to use the function provided in .useState (at least in the context I used) - what it does when there are changes

can use .map to put things in an array to a table

It was so cool seeing things change in real time and react to actions. I'm so excited to see how this website turns out in the future

## Service

port numbers are referred to to access multiple services
frontend - html, css, JavaScript
access endpoints with the fetch function

fetch('https://quote.cs260.click')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });

  async functions return a promise - need to use await to access them

  make sure the app.use() are in order

  I had some complications because of things that were wrong in my backend code but once I started debugging on both the frontend and backend, I found them. I need to fix some things that are slow but so far my service is working!

  ## Database
  
  to insert - .insertOne()
  to find = .find()
    to limit results (limit: number)
  to update = .updateMany()
  to delete = .deleteOne()

  I decided to switch favorites to be personal to each user so I had some complications with that. I had to make sure to specify the specific parts of the user to use for favorites. 

  Other than that, using the database was very simple.

  ## WebSocket

  to debug websocket, you can see it on the backend and then also under messages in the frontend

  ws - non secure WebSocket
  wss - secure Websocket

  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);






