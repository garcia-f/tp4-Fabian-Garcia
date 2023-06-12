const { clearScreenDown } = require("readline");

const mensajeGet=async(req,res)=>{
    res.send("Mensaje Get");
}
const mensajePost=async(req,res)=>{
    res.send("Mensaje Post");
}
const mensajePut=async(req,res)=>{
    res.send("Mensaje Put");
}
const mensajeDelete=async(req,res)=>{
    res.send("Mensaje Delete");
}

module.exports={mensajeGet, mensajePost, mensajePut, mensajeDelete};

