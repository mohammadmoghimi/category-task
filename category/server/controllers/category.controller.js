const { response } = require('express')
const Category = require('../models/category.model')

exports.createCategory = async(request , response) => {
    try {
        const {name, parent_id} = request.body ;

        if( name == null ){
            return response.status(400).json({error:'name is required'})
        }

        const newCategory = await Category.create({
            name,
            parent_id
        }) ;

        return response.status(201).json(newCategory)
    } catch(error){
        console.error('error creating category :' , error);
        return response.status(500).json({error :'Internal Server Error '})
    }
}