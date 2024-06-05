var express = require("express");
var router = express.Router();


var dadoController = require("../controllers/dadoController")

router.post("/plotarGrafico", function(req, res){
    dadoController.plotarGrafico(req,res)
})

module.exports = router