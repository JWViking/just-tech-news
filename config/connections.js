const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize('just_tech_news_db', 'root', 'IHatePasswords@123', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;