var express = require("express");
var router = express.Router();


var dadoController = require("../controllers/dadoController")

router.post("/plotarGrafico", function(req, res){
    dadoController.plotarGrafico(req,res)
}),
router.post("/alertar", function(req, res)
{
    dadoController.alertar(req,res)
})

module.exports = router