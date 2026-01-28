# Tasty Meals

[My Notes](notes.md)

Tasty Meals helps you meal plan for dinner and shows you other people's plans for future inspiration.

## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Are you sick of making the same meals all the time for dinner? Have you ever wondered what your friends or others are making? With Tasty Meals, not only will you be more organized in your meal planning but also you will be more inspired in your dinner choices. Use Tasty Meals to post about your meals and see what those around you are making for their tasty dinners!

### Design

![Design image for login page](loginpage.png) 
![Design for posting page](Post.png) 
![Design for favorites page](Favorites.png)
![Design for about page](About.png)

There are four different views including login, posting, saved favorites, and about information. The user is able to post what they plan to have for dinner and see, like, and save other people's plans on the posting view. The saved favorites view shows the posts that the user saved previously. 

```mermaid
sequenceDiagram
    actor You
    You->>Login: Enter login information
    Login->>About: View about information
    About-->>Login: Login
    Login->>Post: After login
    Post->>Post: Post
    Post->>Post: View others
    Post->>Post: Like other posts
    Post->>Post: Save favorite posts
    Post->>Favorites: See saved favorites
    Favorites-->>Login: Logout
```

### Key features

- Login, logout, and register
- See desciption of the app
- Post plans for dinner
- See the dinner plans posted by other people
- Like other people's posts
- Save favorite posts
- See saved favorite posts
- See total likes for each post

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Four HTML pages, a login/register page (login controls), a page that includes a section to write and post dinner plans, a page for saved favorites, and an about page. Images on login and about pages. Correct HTML structure used.
- **CSS** - clean but inviting color scheme, animation of hearts and pluses (when liking or saving a post), styling that looks good on different screens
- **React** - routing to different pages like after login or pressing on the favorites, about, or posting icon, login, display other peoples meal plans, post user's meal plan, displays likes on other people's posts
- **Service** - Endpoints for login/logout/register, recieving and storing dinner plans, third party call to get random pictures of pizza, pasta dish, and burger [Public API Link](https://github.com/surhud004/Foodish#readme)
- **DB/Login** - Store users (and their authentication), dinner plan posts, likes, and favorite posts in database
- **WebSocket** - When the user posts their dinner plan, it is broadcast to all other users

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://tastymeals.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - Four HTML pages for login, posting dinner plans, saved favorite plans, and about information
- [x] **Proper HTML element usage** - used a variety of tags including body, nav, main, header, footer, span, div, and button
- [x] **Links** - The login page automatically links to the posting page and it also includes a link to the about page. The posting page has a link to itself when someone posts and it includes links for the other pages. The favorites page includes links for the other pages. The about page includes a link for the login page.
- [x] **Text** - The about page has text
- [x] **3rd party API placeholder** - The about page includes photos that standin for where the random photos from the API will be
- [x] **Images** - The login page includes an image of a pizza and the about page also has two photos that are standins for the 3rd party API.
- [x] **Login placeholder** - On the login page there is an input box for an email and password and a submit button for login. The username is also displayed on the posting page.
- [x] **DB data placeholder** - favorite posts that are saved and pulled from the database are represented on the favorites page.
- [x] **WebSocket placeholder** - the posting page has a section that represents realtime posts of others people's dinner plans

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Visually appealing colors and layout. No overflowing elements.** - I did not complete this part of the deliverable.
- [ ] **Use of a CSS framework** - I did not complete this part of the deliverable.
- [ ] **All visual elements styled using CSS** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing using flexbox and/or grid display** - I did not complete this part of the deliverable.
- [ ] **Use of a imported font** - I did not complete this part of the deliverable.
- [ ] **Use of different types of selectors including element, class, ID, and pseudo selectors** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
