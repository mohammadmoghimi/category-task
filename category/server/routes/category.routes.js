const express = require ('express') ;
const router = express.Router() ;

const { createCategory } = require('../controllers/category.controller') ;

router.post('/add' , createCategory)

module.exports = router