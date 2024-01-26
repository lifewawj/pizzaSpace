// NPM Packages included
const express = require('express');
const path = require('path');
const routes = require('./routes')

// Import sequelize connection
const { sequelize } = require('./config/connection')

// Create an app variable and set it to express to initialize the server
const app = express(); // stores the express() within a const var so its easier to call when paired with the express methods
const PORT = process.env.PORT || 3001; // specifies the PORT for the server to run on

// Middleware
app.use(express.json()); // converts the data to json
app.use(express.urlencoded({ extended: true })); // parse incoming request containing URL-encoded data and adds the resulting key-value pairs
app.use(routes); // server access anything from the routes folder

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
});

// Inits the server, and sets up our server to listen for http requests
sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );
});