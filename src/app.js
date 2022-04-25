const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors')
require('dotenv').config();
const budget = require('./routes/budget')
const app = express();


app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())
app.use('/budget', budget);

const PORT = process.env.PORT || 4000


app.listen(PORT, ()=>console.log(`Server running in ${process.env.HOST} mode on port ${PORT}`));