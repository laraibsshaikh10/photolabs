# react-photolabs
The PhotoLabs is a React-based single-page application (SPA) that allows users to view photos by various categories. It enables a user to like images and click on the photos to make the photo in a modal.

## Description
PhotoLabs is a client-side application that enables users to interact with photos through a React-based interface. The application allows users to view photos, navigate through different photo categories (topics), and perform various actions such as liking photos. It communicates with a backend API to fetch and persist data.

## Photolabs Goal
The goal of this project is to create a client-side application using React library.

## Functional Requirements:
- Client-Side Development: 
  - Develop a single-page application for users to interact with photos and their categories.
- Server-Side Development: 
  - PostgreSQL database is used to store the application data
  - The API server is build using node.js Express application
- API Communication: 
  -The client communicates with the API over HTTP using JSON format.

## Behavioural Requirements
- User can view a list of photos on their homepage located from the API
- Users can choose from various categories and see photos related to that category
- Users can click on a photo to see a larger version along with a list of similar photos
- Users can like a photo from anywhere within the application
- Users can see notifications in the favIcon badge as they like photos

## Techincal Specifications
- Frontend:
  - React
  - Create React App (CRA)
  - Webpack
  - Babel

- Backend:
  - Express.js for API server
  - PostgreSQL for database

Two different servers need to be running for the page to work:
1. Client-side Webpack development server
2. API server to provide photo data

## Setup

1. Clone the repository: `git clone https://github.com/lighthouse-labs/photolabs-starter`

2. Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

3. Setup PostgreSQL database:
  - Create a database
  - Run the files to create tables and populate them

4. [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

5. [Backend] Running Backend Servi=er

```sh
cd backend
npm start
```
## Usage
- Open browser and navigate to http://localhost:3000
- The client side server runs on port 3000
- The API server runs on port 8001

## License
This project is licensed under the MIT License.