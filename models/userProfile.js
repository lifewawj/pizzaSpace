// Retrieves and Imports the sequelize variable from connection.js file
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection.js');

// Creating a Table/Model
class UserProfile extends Model { }

UserProfile.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        bio: {
            type: DataTypes.STRING(25),
            allowNull: true,
        },
    },

    {
        // Link to database connection
        sequelize,
        // Set to false to remove `created_at` and `updated_at` fields
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        // Assigning the name for our table 'UserProfile'
        modelName: 'user_profile',
    }
);

module.exports = { UserProfile };