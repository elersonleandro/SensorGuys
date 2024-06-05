var database = require("../database/config");

function plotarGrafico(idArmazem, idEmpresa)
{
    var instrucaoSql = 
    `
    SELECT * from dadoCapturado WHERE fkarmazem = ${idArmazem} AND fkempresa = ${idEmpresa} ORDER BY dataDado DESC, idDado DESC;
    `
    return database.executar(instrucaoSql)
}

module.exports = {
plotarGrafico
}