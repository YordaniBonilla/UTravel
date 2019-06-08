DROP DATABASE IF EXISTS UsersInfo;
/* if database exists then delete it*/
CREATE DATABASE UsersInfo;
/*creates Users database */
USE UsersInfo;
/* tell the system what database to use*/
/*then we create a table in database and poppulate it*/
CREATE TABLE countries
(
  id INT NOT NULL AUTO_INCREMENT PRIMARY key,
country varchar (20)
);

  CREATE TABLE users
  (
    id INT NOT NULL AUTO_INCREMENT PRIMARY key,
    fname varchar (50),
    lname varchar (50),
    about varchar (750),
    email varchar (40),
    userpassword varchar (20),
    userphone varchar (20),
    age int (2),
    userlocation int (2),
    destination int (2),
    file varchar (50),
    twitter varchar (50),
    facebook varchar (60), 
    foreign key (userlocation) references countries (id),
    foreign key (destination) references countries (id)
);

    INSERT INTO countries
      (country)
    VALUE
    ("Antartica")