var armazemModel = require("../models/armazemModel");

function listar(req, res)
{
    var idempresa = req.body.empresaServer;

    armazemModel.listar(idempresa).then(function (resposta){
        if(resposta.length > 0)
        {
            res.status(200).json(resposta)
        }
        else{
            res.status(204).send("Nenhum dado encontrado")
        }
    }).catch(function(erro){
        console.log(erro)
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage)
    })
}

module.exports ={
    listar
}