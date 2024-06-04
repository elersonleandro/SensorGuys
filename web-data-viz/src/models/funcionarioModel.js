var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idfuncionario, nome, email, fkempresa as empresaId, cargo FROM funcionario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastro(nome, email, senha, empresa, tipo, gerente) {
    console.log("ACESSEI O funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO funcionario (nome, email, senha, fkEmpresa, cargo, fkGerente) VALUES ('${nome}', '${email}', '${senha}', '${empresa}', '${tipo}', '${gerente}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar(idfuncionario, empresaId)
{
    var instrucaoSql = `
    SELECT nome, email, cargo FROM funcionario WHERE fkgerente = ${idfuncionario} AND fkempresa = ${empresaId} 
    `

    console.log(instrucaoSql)
    return database.executar(instrucaoSql)
}


module.exports = {
    autenticar,
    cadastro,
    listar
};