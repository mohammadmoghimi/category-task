const { DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const Category = sequelize.define('category' ,{
    id :{
        allownull:false ,
        autoIncrement:true, 
        primaryKey:true ,
        type:DataTypes.INTEGER
    } , 
    name :{
        type:DataTypes.STRING 
    } ,
    parent_id :{
        allownull:true ,
        type:DataTypes.INTEGER
    } , 
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
      }
} ,   {
    tableName: 'category' 
  } ,{
        freezeTableName:true
    }) ;

module.exports = Category