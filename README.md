# My First API in TypeScript

This is a simple API built with **Express** and **TypeScript**.  
It responds with `"HELLO WORLD!"` when no name is provided, or `"Hi there, {name}"` if you send a name in the URL.

## Requirements

- **Node.js** (version 18 or higher recommended)
- **npm** (comes with Node.js)

## Installation
Clone this repository and install dependencies:

````bash
npm install
npm install express
npm install --save-dev typescript ts-node @types/express @types/node
````

## Running the server
````bash
npm run dev