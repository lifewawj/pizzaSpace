// Imports the UserProfile Model from the ../models folder with the userProfile.js file
const { UserProfile } = require('../models/userProfile-model');

// Stores the userProfileData inside an array following the UserProfile model
const userProfileData = [
    // Seeds inputed into the table
    {
        first_name: "leonardo",
        last_name: "",
        bio: "",
    },

    {
        first_name: "leonardo",
        last_name: "",
        bio: "",
    },

    {
        first_name: "leonardo",
        last_name: "",
        bio: "",
    },

    {
        first_name: "leonardo",
        last_name: "",
        bio: "",
    },
];

// Creates the seeds inputing it into the UserProfile Model
const seedUserProfile = async () => await UserProfile.bulkCreate(userProfileData);

// Exports the seedUserProfile const var
module.exports = seedUserProfile;
