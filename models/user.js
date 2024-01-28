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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                
            }
        },
    },

    {
        // Link to database connection
        sequelize,
        // Set to false to remove `created_at` and `updated_at` fields
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        // Assigning the name for our table 'User'
        modelName: 'user',
    }
);

module.exports = { User };