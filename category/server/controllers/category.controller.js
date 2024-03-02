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
} ;

exports.getAllCategories = async(request , response) => {
    try {
        const allCategories = await Category.findAll();

        const categoriesMap = new Map();

        allCategories.forEach(category => {
            const parentId = category.parent_id || 'null';
            if (!categoriesMap.has(parentId)) {
                categoriesMap.set(parentId, []);
            }
            categoriesMap.get(parentId).push(category);
        });

        const buildHierarchy = parentId => {
            const categories = categoriesMap.get(parentId) || [];

            return categories.map(category => {
                const children = buildHierarchy(category.id);

                return {
                    id: category.id,
                    name: category.name,
                    parent_id: category.parent_id,
                    children: children.length > 0 ? children : null
                };
            });
        };

        const hierarchy = buildHierarchy('null');

        response.status(200).json(hierarchy);
    } catch (error) {
        console.error('Error fetching categories:', error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
}