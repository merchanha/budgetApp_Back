const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const morgan = require('morgan');
require('dotenv').config();
const budget = require('./routes/budget')


const app = express();
app.use(bodyParser.json())

app.use('/budget', budget);

const PORT = process.env.PORT || 4000


app.listen(PORT, ()=>console.log(`Server running in ${process.env.HOST} mode on port ${PORT}`));