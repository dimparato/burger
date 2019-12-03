create database burgers_db;
use burgers_db;

create table burgers (
    id integer (10) auto_increment not null,
    burger_name varchar (50),
    devoured boolean default false,
    primary key (id)
);