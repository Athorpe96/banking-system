CREATE DATABASE bankapp_db;

USE bankapp_db;

CREATE TABLE bank (
id int auto_increment not null,
name varchar (45) not null,
checking_balance int,
savings_balance int,
primary key(id)
)