const express = require("express");
const routes=express.Router();
const {mensajeGet, mensajePost, mensajePut, mensajeDelete}=require('../controllers/controllers.js');


routes.get('/get', mensajeGet);
routes.put('/put', mensajePut);
routes.post('/post', mensajePost);
routes.delete('/delete', mensajeDelete);


module.exports = routes;