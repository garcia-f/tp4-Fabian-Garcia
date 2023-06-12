const express = require("express");
const routes=express.Router();
const {mensajeGet, mensajePost, mensajePut, mensajeDelete}=require('../controllers/controllers.js');


routes.get('/', mensajeGet);
routes.put('/', mensajePut);
routes.post('/', mensajePost);
routes.delete('/', mensajeDelete);


module.exports = routes;