const express = require('express') ;
const app = express() ;
const cors = require('cors') ;
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const categoryRoutes= require('./routes/category.routes')


app.use(cors()) ;

app.use('/api',categoryRoutes)



const PORT = 4000 ;
app.listen(PORT,() => {
    console.log(`server is listening on port ${PORT}`);
}) ;