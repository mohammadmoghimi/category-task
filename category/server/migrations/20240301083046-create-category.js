'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('category',{
      id:{
        allownull:false ,
        autoIncrement:true, 
        primaryKey:true ,
        type:Sequelize.INTEGER
      } ,
       name :{
          type:Sequelize.STRING 
       } ,
       parent_id:{
        allownull:true ,
        type:Sequelize.INTEGER
       }
      
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('category')

  }
};
