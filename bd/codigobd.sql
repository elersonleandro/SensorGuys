create database Sprint3; use Sprint3;

create table empresa (
idempresa int primary key auto_increment,
cnpj char(14),
NomeEmpresa varchar(45),
email varchar(45)
);

create table funcionario (
idfuncionario int auto_increment ,
fkempresa int,
constraint PKFuncionarioEmpresa primary key (idfuncionario, fkempresa),
Nome varchar(45),
Senha varchar(45),
email varchar(45),
cargo varchar(8),
fkgerente int,
foreign key (fkgerente) references funcionario (idfuncionario),
foreign key (fkempresa) references empresa (idempresa)
);

create table cafe (
idcafe int primary key auto_increment,
Nome varchar(45),
TempMIN decimal,
TempMAX decimal,
UmidadeMIN decimal,
UmidadeMAX decimal
);

create table armazem (
idarmazem int primary key,
fkempresa int,
constraint fkEmpresario foreign key (fkempresa) references empresa (idempresa),
fkTipoCafe int,
constraint FkCafe foreign key (fkTipoCafe) references cafe (idcafe)
);

create table arduino (
idarduino int primary key,
fkarmazem int,
constraint fkArduinoArmazem foreign key (fkarmazem) references armazem (idarmazem),
fkempresa int,
constraint fkArduinoEmpresa foreign key (fkempresa) references empresa (idempresa)
);

create table dadoCapturado (
idDado int  primary key auto_increment,
temperatura decimal (5,2),
umidade decimal (5,2),
fkarmazem int,
constraint fkArmazemDado foreign key (fkarmazem) references armazem (idarmazem),
fkarduino int,
constraint fkDadoArduino foreign key (fkarduino) references arduino (idarduino),
fkempresa int,
constraint fkDadoFuncionario foreign key (fkempresa) references empresa (idempresa)
);


INSERT INTO empresa (cnpj, NomeEmpresa, email) 
VALUES ('12345678901234', 'ViewCoffee', 'contato@empresaexemplo.com.br');

INSERT INTO funcionario (fkempresa, Nome, Senha, email, cargo, fkgerente) 
VALUES (1, 'Fernando Brandão', 'senha123', 'fernando.brandao@empresaexemplo.com.br', 'Gerente', NULL);
