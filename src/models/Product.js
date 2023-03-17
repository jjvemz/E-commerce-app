const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/configuration');

class Product extends Model{}

Product.init(
    {
        id:{
            type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
        },
        name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        description: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.DOUBLE
        },
        quantity:{
            type: DataTypes.INTEGER
        },
        category_id: {
            type: DataTypes.INTEGER
        },
    },
    {
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'product',
	}
)
module.exports = Product