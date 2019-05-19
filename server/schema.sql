DROP DATABASE IF EXISTS Users;
/* if database exists then delete it*/
CREATE DATABASE Users;
/*creates Users database */
USE Users;
/* tell the system what database to use*/
/*then we create a table in database and poppulate it*/
CREATE TABLE countries (
id int NOT NULL AUTO_INCREMENT, 
country varchar(20)
); 

CREATE TABLE Users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(50),
  about varchar(750),
  userlocation int 2 ,
  destination int 2,
  picture varchar(50),
  email varchar(40),
  phone varchar(20),
  twitter varchar(50),
  facebook varchar(60),
  username varchar(50), 
  foreign key(userlocation) references countries(id),
  foreign key(destination) references countries(id)
);

INSERT INTO Countries (country) VALUE ("Antartica
");