// Imports the User model from the ../models folder with the user.js file
const User = require('../models/user-model');

// Stores all the userData inside an array following the User model
const userData = [
    // Seeds input into the table
    {
        username: "leonardo",
        password_hash: "password123",
    },
    {
        username: "Dontello",
        password: "password123",
    },
    {
        username: "Raphael",
        password: "password123",
    },
    {
        username: "Michaelangelo",
        password: "password123",
    },
];

// Creates the seeds by inputting them into the User Model
const seedUser = () => User.bulkCreate(userData);

// Exports the seedUser const variable
module.exports = seedUser;
