# Open Agent Tech Test - Contact app

- [Process](#process)
- [Tech](#tech)
- [API Endpoints](#api-endpoints)
- [To Run](#to-run)

## Process

For the frontend React app, I decided to use the Next.js framework as it is a full stack React framework (instead of the outdated create-react-app which has a number of performance issues). Next.js includes an app router which fully implements the official React Server Components specification, so it is easier to implement routing.
The backend uses the Express framework and Node.js.

To get started, since I was unfamiliar with Express and Node.js, I looked up a quick tutorial on YouTube to get the basic app going, as well as looking through the official documentation. You can find the tutorial <a href="https://www.youtube.com/watch?v=w3vs4a03y3I">here</a>.

1. Started with home page (contact details + form)
2. Created contacts list page
3. Use Next.js router dom for navigation between pages
4. Created a basic skeleton API using Express and Node.js to render content on frontend

For styling, I started from a mobile-first design to make sure the site is responsive for mobile users, then worked up to bigger screen sizes. I started from the smallest possible screen size available on Chrome DevTools 'device toolbar', which is an iPhone SE. I originally planned to implement a responsive navbar which would chang for mobile and desktop screen sizes, but I did struggle with it and decided it was not the most important use of time. I want to work on learning how to build a mobile responsive navbar, this is something I would implement with a bit more time available.

For the API, I decided to use a boilerplate express REST API which I could then edit to the needs of this tech test. If I had more time, I would create the API myself from scratch. You can find the GitHub repo for the boilerplate <a href="https://github.com/aichbauer/express-rest-api-boilerplate">here</a>.

### Naming Convention

Since I used Next.js to create the react app, I utilised the Next.js App router which works by locating a file in any given folder called 'page.js'. To try to make it clear which page is what, I used a descriptive folder name. Files which have a descriptive name do not need to be accessed by the app router as they are only providing components, hence why they are not called 'page.js'.

## Tech

Express
Node.js
PostgreSQL

## API Endpoints

```sh
GET /contacts - get all contacts
POST /contact - create contact
PATCH /contact/:id - update contact
DELETE /contact/:id - delete contact
```

I did some manual API testing via Postman during the development process.

## To Run

1. Clone the repo locally
2. ```sh
   cd client/openagent-contact
   ```
3. In a terminal, enter "npm i"
4. Then, enter "npm start"
