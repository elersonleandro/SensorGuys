create database sprint1;
use sprint1;
-- Grupo: Elerson Leandro (RA: 03241012),  
-- Enzo Minardi (RA: 03241043), 
-- Luiz Eduardo (RA: 03241039),
-- Luiz Fernando (RA: 03241037),
-- Maikon Douglas (RA: 03241009), 
-- Marcelo Henrique (RA: 03241064),
-- Matheus Grisostomo (RA: 03241059),
-- Samuel Bento Alves (RA:03241034)

Create table Empresa (
Empresa int primary key, 
CNPJ char (14),
NomeEmpresa varchar (100), 
NomeGrupo varchar (50), 
NumFixo char (8),
NumTel char (11),
NumTel2 char (11),
DtAfiliação date, 
email varchar (256)
);

create table funcionario ( 
idFuncionario int primary key, 
Empresa varchar (50), 
nome varchar (50), 
email varchar (256), 
DtNasc date, 
Telefone char (11), 
senha varchar (256)
);

Create table Sensor_Umidade (
IdSensorInterno int primary key,
Umidade int, 
DtUmidade datetime
);

Create table Sensor_Temperatura(
IdSensorTemp int primary key, 
Temperatura int,
DtTemperatura datetime
);
desc Empresa;
desc funcionario;
desc Sensor_Temperatura;
desc Sensor_Umidade;