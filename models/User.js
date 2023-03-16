const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = require('../config/configuration');

class User extends Model {
  async setPassword(value) {
    const hashedPassword = await bcrypt.hash(value, 10);
    this.setDataValue('password', hashedPassword);
  }

  async checkPassword(value) {
    return await bcrypt.compare(value, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      set(value) {
        this.setPassword(value);
      },
    },
    age:{
        type: DataTypes.INTEGER
    },
    address:{
        type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
}
);

module.exports = User;
