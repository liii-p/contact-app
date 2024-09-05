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

For styling, I started from a mobile-first design to make sure the site is responsive for mobile users, then worked up to bigger screen sizes. I started from the smallest possible screen size available on Chrome DevTools 'device toolbar', which is an iPhone SE.

For the API, I decided to use a boilerplate express REST API which I could then edit to the needs of this tech test. If I had more time, I would create the API myself from scratch. You can find the GitHub repo for the boilerplate <a href="https://github.com/aichbauer/express-rest-api-boilerplate">here</a>.

## Tech

Express
Node.js
PostgreSQL

## API Endpoints

```sh
GET /contacts - get all contacts
POST /contact - create contact
PATCH /contact - update contact
DELETE /contact - delete contact
```

I did some manual API testing via Postman during the development process.

## To Run

1. Clone the repo locally
2. cd into client folder
3. In a terminal, enter "npm i"
4. Then, enter "npm start"
