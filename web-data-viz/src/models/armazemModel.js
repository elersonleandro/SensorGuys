var database = require("../database/config");

function listar(idempresa)
{
    var instrucaoSql = `SELECT a.idarmazem, d.temperatura, d.umidade
FROM armazem a
JOIN dadoCapturado d ON a.idarmazem = d.fkarmazem
WHERE d.dataDado = (SELECT MAX(dc.dataDado) 
FROM dadoCapturado dc
WHERE dc.fkarmazem = d.fkarmazem) AND a.fkempresa = ${idempresa};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports= {
    listar
}