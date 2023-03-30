create database libros;
use libros;
create table libros(
    id int not null auto_increment primary key,
    nombre varchar(50) not null,
    editorial varchar(50) not null,
    autor varchar(50) not null,
    paginas int not null,
    lanzamiento date not null
);