// NPM Packages included
const express = require('express');
const path = require('path');
const { sequelize } = require('./config/connection')

// Create an app variable and set it to express to initialize the server
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
});

// Inits the server, and sets up our server to listen for http requests
sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );
});