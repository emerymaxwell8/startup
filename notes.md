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

After reviewing the code for Simon, I realized I need to be very specific for all of my elements. This means putting most elements into different classes that I can work in. I also saw that it is better to create different css files for each of the pages. 

Have to make sure to get rid of html styling so it doesn't mess with css styling

Had to specific the text color specifically with each element, not sure if there is a better way to do that

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
