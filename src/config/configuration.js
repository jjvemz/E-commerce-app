require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
    logging: (msg) => {
      if (msg.startsWith("Executing")) {
        return;
      }
      console.log(msg);
    }
  }
);

module.exports = sequelize;
