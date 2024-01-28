const seedUser = require('./user-seeds');
const seedUserProfile = require('./userProfile-seeds');

const sequalize = require('../config/connection.js');

const seedAll = async () => {
    // SYNCS SEQUALIZED to the database
    await sequalize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser();
    console.log('\n----- USER SEEDED -----\n');

    await seedUserProfile();
    console.log('\n----- USER PROFILE SEEDED -----\n');

    process.exit(0);
};

// Calls the seedAll function
seedAll();