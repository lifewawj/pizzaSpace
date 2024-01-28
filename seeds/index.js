const seedUser = require('./user-seeds.js');
const seedUserProfile = require('./userProfile-seeds.js');

const { sequelize } = require('../config/connection.js');

const seedAll = async () => {
    // SYNCS SEQUELIZE to the database
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser();
    console.log('\n----- USER SEEDED -----\n');

    await seedUserProfile();
    console.log('\n----- USER PROFILE SEEDED -----\n');

    process.exit(0);
};

// Calls the seedAll function
seedAll();