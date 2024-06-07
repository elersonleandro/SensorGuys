var dadoModel = require("../models/dadoModel")


function plotarGrafico(req, res)
{
    var idarmazem = req.body.armazemServer;
    var idempresa = req.body.empresaServer;

    
    dadoModel.plotarGrafico(idarmazem, idempresa).then(function (resposta){
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

function alertar(req, res)
{

    var idempresa = req.body.empresaServer;

    dadoModel.alertar(idempresa).then(function (resposta){
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

module.exports = {
    plotarGrafico,
    alertar
}