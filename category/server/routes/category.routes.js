const express = require ('express') ;
const router = express.Router() ;

const { createCategory, getAllCategories } = require('../controllers/category.controller') ;

router.post('/add' , createCategory) ;

router.get('/getAll' , getAllCategories)

module.exports = router