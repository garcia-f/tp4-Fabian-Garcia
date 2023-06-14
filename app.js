const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();
const port = process.env.port;
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.json());


app.use('/',require('./routes/app.routes'));

app.listen(port || 6000, ()=>{
    console.log(`servidor escuchando en http://localhost:${port}`);
})

