var express = require("express");
var router = express.Router();


var armazemController = require("../controllers/armazemController")

router.post("/listar", function(req, res){
    armazemController.listar(req,res)
})


module.exports = router