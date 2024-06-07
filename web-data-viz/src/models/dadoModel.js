var database = require("../database/config");

function plotarGrafico(idArmazem, idEmpresa) {
    var instrucaoSql =
        `
        SELECT umidade, temperatura, DATE_FORMAT(dataDado, '%d/%m/%Y - %H:%i:%s') as dataDado
FROM dadoCapturado
WHERE fkarmazem = ${idArmazem} AND fkempresa = ${idEmpresa}
ORDER BY dataDado DESC
LIMIT 5;

    `
    return database.executar(instrucaoSql)
}

function alertar(idEmpresa) {
    var instrucaoSql = `
   SELECT d.temperatura, d.umidade,DATE_FORMAT(d.dataDado, '%d/%c/%Y - %H:%I:%S') as dataDado, a.idarmazem, c.nome, c.TempMAX, c.TempMin, c.UmidadeMAX, c.UmidadeMIN FROM dadoCapturado d 
JOIN armazem as a on d.fkarmazem = a.idarmazem 
JOIN cafe c on a.fkTipoCafe = c.idcafe 
WHERE d.temperatura > c.TempMAX OR d.temperatura < c.TempMIN
OR d.umidade < c.UmidadeMIN OR d.umidade > c.UmidadeMAX AND d.fkempresa = ${idEmpresa} ORDER BY d.dataDado DESC;
   `;

    return database.executar(instrucaoSql)
}

module.exports = {
    plotarGrafico,
    alertar
}