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
    }
);