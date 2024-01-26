// Imports Model and DataTypes from sequalize
const { Model, DataTypes } = require('sequelize');

// Retrieves and Imports the sequelize variable from connection.js file
const { sequelize } = require('../config/connection.js');

// Creating a Table/Model
class User extends Model {}

User.init(
    // define columns/fields
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(10),
            allowNull: false,
            validate: {

            }
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {

            }
        },
    }
);