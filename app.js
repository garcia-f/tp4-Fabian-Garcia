const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();
const puerto = process.env.puerto;
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.json());


app.use('/',require('./routes/app.routes'));

app.listen(puerto || 5000,()=>{
    console.log(`servidor escuchando en http://localhost:${puerto}`);
})

