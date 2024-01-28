// Imports the User model from the ../models folder with the user.js file
const User = require('../models');

// Stores all the userData inside of an array following the User model
const userData = [
    // Seeds inputed into the table
    {
        username: "leonardo",
        password_hash: "",
    },

    {
        username: "Dontello",
        password: "",
    },

    {
        username: "Raphael",
        password: "",
    },

    {
        username: "Michaelangelo",
        password: "",
    },
];

// Creates the seeds inputing it inside the User Model
const seedUser = () => User.bulkCreate(userData);

// Exports the seedUser const var
module.exports = { seedUser };