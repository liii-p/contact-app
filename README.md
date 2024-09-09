# Open Agent Tech Test - Contact app

- [Process](#process)
- [Tech](#tech)
- [API Endpoints](#api-endpoints)
- [To Run](#to-run)
  - [Client](#client)
    - [Dockerize](#dockerize)
  - [Server](#server)

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

Since I used Next.js to create the react app, I utilised the Next.js App router which works by locating a file in any given folder called 'page.js'. To try to make it clear which page is what, I used a descriptive folder name. Files which have a descriptive name do not need to be accessed by the app router as they are only providing components, hence why they are not called 'page.js'. Folders that are used in routing include a "-" to imitate that of a regular url.

### Testing

I decided to add some test suites to this tech test with React Testing Library and Jest. Since I am using Next js, and subsequently the Next js 'App Router', I encountered an error whenever I tried to run a test: "invariant expected app router to be mounted". I struggled with this error for a while, looking at various threads and discussions as well as countless tutorials. It was a challenge to understand how to properly mock the app router, but eventually I found a suitable solution.

For the server, tests are included for get all and create. The models are not being tested separately as they are inherently tested with the controller. For the client, tests are included for the home page and thank you page.

## Tech

Client:

- React/Next.js
- SASS
- React testing library/Jest

Server:

- Express
- Node.js
- PostgreSQL

## API Endpoints

```sh
GET /contacts - get all contacts
POST /contact - create contact
PATCH /contact/id - update contact
DELETE /contact/id - delete contact
```

I assumed that all the details being entered in the form would be necessary for the API. On the contacts list page, when the verified button is clicked, this is updated as well on the backend. In the future, I would update the UI to make it more streamlined and clear when a contact is or is not verified.
I did some manual API testing via Postman during the development process.

## To Run

1. Clone the repo locally

   Prerequisite: Make sure you have a postgreSQL database to which the API can connect. Customise the connection.js file as needed (i.e. change the user and password to match your postgreSQL details).
   In a production environment, I would use github secrets for passwords and other sensitive details.

### Client

Firstly, please locate the "config.js" file and add the local port that the api will be running on. The default is "localhost:2017". If you wish to change this, go to the server folder, then "/config/index.js" and edit the "2017" part in this line:

```js
port: process.env.PORT || "2017",
```

To run via your local system:

```sh
  cd client/openagent-contact

  npm i

  npm run dev
```

OR to run in a Docker container:

#### Dockerize

To run the client app (/client/openagent-contact) in a docker container, enter in the command line:

```sh
docker build -t openagent:dev .

# After it's finished building:
docker run --publish 8080:3000 openagent:dev
```

The client is now accessible from localhost:8080.

### Server

To run via your local system:

```sh
  cd server

  npm i

  npm run dev
```

I would like to containerize the server later down the track. I would need more time to understand the complexity of containerizing an express api which requires an external DB (PostgreSQL).

Please note that data is not persistent between sessions as the api drops any existing tables each time the server is started.
