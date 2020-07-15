# Order-viewer

This project has been built with the MERN stack along with styled components for CSS, cypress for end-to-end test.

## Demo

This project was deployed to Heroku for a demo:
https://order-viewer.herokuapp.com/

## Prerequisites

1. Node.js - Download and Install Node.js. You can also follow this gist for a quick and easy way to install Node.js and npm

2. MongoDB - Download and Install Atlas and compass - Cloud and GUI for MongoDB, Make sure it's running on the default port.

3. NPM - Install NPM for all dependencies both in server and client.

4. React - Install react using creat-react-app.

## Quick Start

Install dependencies for server
npm install

Install dependencies for client
npm run client-install

## Running locally

Run the client & server with concurrently
npm run dev

Run the Express server only
npm run server

Run the React client only
npm run client

Server runs on http://localhost:5000 and client on http://localhost:3000

## Running test

1. run npm run dev first and keep the program running

2. npm run test-e2e to lauch the test

[![Test video](https://youtu.be/ulREWSvBnq4)]

## Database Seeder

To seed the database with data of orders, customers, companies, items and develiveries from the ".csv" format, run

Destroy all data: node seeder -d

Import all data: node seeder -i

## Project Roadmap

### Purpose and Implementation details

1. Demonstrate using MongoDB to query multiple tables and to accomplish a join.

2. Build an API for the front end to comsume, which can be easily integrated and extended using Node.js and Express.

3. Creating and running single-page application using React.js and hooks(useState,useEffect,useMemo,useRef). It offers react-table, styled-components to make implementation easier.

### Additions

1. I used MongoDB to setup database but still find it's a little hard for NoSQL to join tables, even I used aggregate, lookup and virtual field of MongoDB to solve this problem,but I still got the delivery amount unsovled.So I used the data of delivery number instead of delivery amount. I'd like to use Postgres and SQL query to refactor later on.

2. I'd like to use Bulma to have better CSS design and UI appearance for table.

3. Currently the orders can be searched by numbers of order name, as "001-","002-". I'm still exploring to use Fuzzy Search for searching job, which can be searched by any character or number.
