# CarryOkay

This is a Mod 3 [Front-End Project](https://frontend.turing.io/projects/module-3/stretch.html) by [Elizabeth Hahn](https://github.com/elizhahn), [Jessica Justice](https://github.com/m1073496) & [Marika Shanahan](https://github.com/monshan).

### Deployed App: [CarryOkay](https://carryokay.netlify.app/)
### Deployed Back-End: [CarryOkay Database](https://carryokay-server.herokuapp.com/)

## Outline

1. [Project Overview](#project-overview)
2. [App Overview](#app-overview)
3. [Planning Resources](#planning-resources)
4. [Learning Goals](#learning-goals)
5. [Tech Stack](#tech-stack)
6. [Features](#features)
7. [Instructions for Installation](#instructions-for-installation)
9. [Future Iterations](#future-iterations)
10. [Project Reflections](#project-reflections)


## Project Overview

The goal of this project was to self-teach back-end technologies by creating a database, building out a server, and making network requests to access that data. We decided to learn PostgreSQL and Knex.js, and to build upon our understanding of Node.js and Express.js. We also built out the front-end of the application using React.js, HTML5 and CSS3/SCSS, and implemented an automated testing suite using Cypress. In summary, this is a fully tested, PERN stack application.


## App Overview

Have you ever been out and about and _suddenly_ your group decides it's time to karaoke? You're super stoked and ready to have some fun, but all of a sudden you can't seem to remember your favorite karaoke songs 😱 !

If only you had a better memory! If only you hadn't had those last two (or three, or four...) drinks! Well, worry not! CarryOkay has you covered! With this app, you can carry a list of your favorite songs around with you or even search for tried and true crowd favorites to sing on the fly!

As a user, you can tap or click the ❤️ to add a song from the Song Book to your personal library. Not into it as much as you were last night? Simply remove it by tapping or clicking the ⛔️ on your 'My Songs' page. Tap or click the 🎤 icon to see the lyrics of your desired song in a convenient pop-up, or search for songs by title, artist, or genre!

CarryOkay: the app you carry, the app that makes everything okay, the app for karaoke!


## Planning Resources

- [Project Board](https://trello.com/b/rcWungoW/stretch-project)
- [Wireframes](https://excalidraw.com/#room=d828264f851b55b0ddac,tFSr5q35FXeVUoMCcn2YWA)
- [Miro Board - Class & Database Structure](https://miro.com/welcomeonboard/wws0nQE5F4wGSqWiccWs4RYJGZU5lMpbtFCgcL3hrrTnddj7FfLMs1eOCRSbTWtc)
- [DTR](https://gist.github.com/m1073496/f53e32c1796ab41ed5f767ef74846c6a)

## Learning Goals

  ### Team Goals
    
 - Fill in gaps of knowledge between front-end and back-end
 - How to create a database / understand how a database works / how to hook it up with the front-end
 - How to deploy the site (full stack)
 - We'll know we're successful when we produce a fully-functional app and we all feel comfortable with our new technologies
  
  ### Individual Goals
  
    Elizabeth
      - Understand our back-end technologies
      - Practice automated testing with Cypress

    Jessica
      - Understand our back-end technologies
      - Get more comfortable with styling
    
    Marika
      - Understand our back-end technologies
      - Practice building an app with React.js


## Tech Stack

### Front-End:
- JavaScript ECMA6
  - React (create-react-app)
  - React Router
- HTML5
- CSS3
  - SASS / SCSS

### [Back-End](https://github.com/elizhahn/karaoke-stretch-api):
- Node.js
  - Express.js
- PostgresSQL
- Knex.js

### Testing:
- Cypress
  - Mocha
  - Chai

## Features

### Homepage

![](https://media.giphy.com/media/Hycro6UotaEas7gcnX/giphy.gif)

### Song Book

<img width="1271" alt="Screen Shot 2021-04-19 at 3 50 32 PM" src="https://user-images.githubusercontent.com/73088654/115307849-0c793a80-a127-11eb-9f17-3db64ee87f43.png">


### My Songs



### Search, Favorite and Unfavorite Songs & Find Lyrics

![](https://media.giphy.com/media/0c4b0W2JxauMR8dGME/giphy.gif)

![](https://media.giphy.com/media/BNBEKgVW2hjGIrtoCy/giphy.gif)

### Favorite and Remove Songs

![](https://media.giphy.com/media/IoM34CQQAs8313HvS8/giphy.gif)

### Find Lyrics

![](https://media.giphy.com/media/9TqsAH5eU9M0cUABDP/giphy.gif)

### Responsive Design

![](https://media.giphy.com/media/uvPQqAoF0nOy75Gxxm/giphy.gif)

### Accessibility

<img width="1096" alt="Screen Shot 2021-04-19 at 6 03 21 PM" src="https://user-images.githubusercontent.com/73088654/115317787-97633080-a139-11eb-8d74-4f0ee8b65219.png">

<img width="929" alt="Screen Shot 2021-04-19 at 6 05 35 PM" src="https://user-images.githubusercontent.com/73088654/115317901-da250880-a139-11eb-88ad-5eaf2e4fac1d.png">

### End-to-End Testing Suite

![](https://media.giphy.com/media/Sj0bgQZFOLhQNQNdpj/giphy.gif)

## Instructions for Installation

  - To run this application on your local machine, clone down this repo, change into the root directory from the command line, and run `npm install`. 
    
  - Then run `npm   start` to open the application locally. 
    
  - To run the test suite locally, you will also need to run the command `npm i -D cypress` from the command line.
    
  - Once it  has installed, run `npx cypress open`, then select the `carry_okay_spec.js` test file. 
    
  - Note: you will need to run the application locally (start the server with `npm start` from the root directory on the command line) in order to run the automated tests.

## Future Iterations

 - Add functionality to make genre buttons clickable --> navigate to a library of songs that pertain to that genre
 - Add log-in functionality for users, save, update, or delete users' data in a PostgreSQL table in our database with either a POST, PUT, or DELETE network request
 - Add a helpful message on the `My Songs` view that would display if a user has no songs currently saved


## Project Reflections

### Challenges

  - Learning PostgreSQL and Knex.js in a week 😬
  - Deploying our back-end to Heroku

### Wins

  - This was an awesome team, and a really enjoyable experience overall
  - Communication was solid
  - Paired-programming really got us through the heavy lifts that came with learning these new technologies
  - Building out and deploying a full-stack application that is fully tested and 100% accessible
