const { Model, Datatypes} = require('sequelize');
const sequelize = require('../config/configuration');

class Product extends Model{}

Product.init(
    {
        id:{
            type: Datatypes.INTEGER
        },
        name:{
            type: Datatypes.STRING
        },
        description: {
            type: Datatypes.TEXT
        },
        price: {
            type: Datatypes.DOUBLE
        },
        quantity:{
            type: Datatypes.INTEGER
        },
        category_id: {
            type: Datatypes.INTEGER
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