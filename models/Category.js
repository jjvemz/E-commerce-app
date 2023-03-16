const { Model, DataTypes} = require('sequelize');

const sequelize= require('../config/configuration');

class Category extends Model{

}

Category.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true
        },
        category_name:{
            type:DataTypes.string,
            allowNull:false,
            validate:{
                isAlphanumeric:true,
            },
        },
    },
    {
        sequelize,
        timestamps:true,
        underscored:true,
        modelName:'category'
    }
)

module.exports = Category