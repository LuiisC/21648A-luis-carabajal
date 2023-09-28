const { Sequelize, DataTypes } = require('sequelize');

// Crear una instancia de conexión a BD
//nombre database: post_db
const sequelize = new Sequelize('post_db', 'root', '', {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  });


  module.exports = {
    sequelize,
    DataTypes,
    Sequelize,
  }