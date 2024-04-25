CREATE DATABASE sprint2;
USE sprint2;

CREATE TABLE empresa(
idEmpresa INT PRIMARY KEY AUTO_INCREMENT, -- Acho que poderia ser char e algum número, só para não ser um id previsível
cnpj CHAR(14),
nomeEmpresa VARCHAR(45),
email VARCHAR(45)
);

CREATE TABLE funcionario(
idFuncionario INT AUTO_INCREMENT,
fkEmpresa INT,
CONSTRAINT PKfuncionarioEmpresa 
PRIMARY KEY(idFuncionario, fkEmpresa),
nome VARCHAR(45),
cargo VARCHAR(8),
email VARCHAR(50),
senha VARCHAR(45),
CONSTRAINT fkFuncionarioEmpresa FOREIGN KEY (fkEmpresa)
REFERENCES empresa(idEmpresa)
);

CREATE TABLE armazem(
idArmazem INT AUTO_INCREMENT,
fkEmpresa INT,
CONSTRAINT pkArmazemEmpresa 
PRIMARY KEY(idArmazem, fkEmpresa),
tipoCafe CHAR(7),
CONSTRAINT fkArmazemEmpresa FOREIGN KEY (fkEmpresa)
REFERENCES empresa(idEmpresa)
);

CREATE TABLE arduino(
idArduino INT AUTO_INCREMENT,
fkArmazem INT, 
CONSTRAINT pkSensorArmazem 
PRIMARY KEY(idArduino, fkArmazem),
CONSTRAINT fkArduinoArmazem FOREIGN KEY (fkArmazem)
REFERENCES armazem(idArmazem)
);

CREATE TABLE dadoCapturado(
idDado INT AUTO_INCREMENT,
fkArduino INT,
CONSTRAINT pkDadoSensor 
PRIMARY KEY (idDado, fkArduino),
temperatura DECIMAL(5,2),
umidade DECIMAL(5,2),
dtRegistro DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fkDadoArduino FOREIGN KEY(fkArduino)
REFERENCES arduino(idArduino)
);

DESC empresa;
DESC funcionario;
DESC armazem;
DESC arduino;
DESC dadoCapturado;