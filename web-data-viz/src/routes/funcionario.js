var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de funcionarioController.js
router.post("/cadastro", function (req, res) {
    funcionarioController.cadastro(req, res);
})

router.post("/autenticar", function (req, res) {
    funcionarioController.autenticar(req, res);
});

router.post("/listar", function(req, res) {
    funcionarioController.listar(req,res)
})

module.exports = router;