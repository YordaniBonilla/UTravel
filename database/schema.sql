DROP DATABASE IF EXISTS UsersInfo;
/* if database exists then delete it*/
CREATE DATABASE UsersInfo;
/*creates Users database */
USE UsersInfo;
/* tell the system what database to use*/
/*then we create a table in database and poppulate it*/
CREATE TABLE countries
(
count_id int not null auto_increment primary key,    
country varchar (20),
destination varchar(20)

) ENGINE=InnoDB;

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
    count_id int not null,
    file varchar (50),
    twitter varchar (50),
<<<<<<< HEAD
    facebook varchar (60), 
    foreign key (userlocation) references countries (id),
    foreign key (destination) references countries (id)
);
=======
    facebook varchar (60),
    FOREIGN KEY (count_id) REFERENCES countries(count_id)
    ON UPDATE CASCADE
)ENGINE=InnoDB;
>>>>>>> f808734efc379d7688358aa89b84d245cd969fb9

    INSERT INTO countries
      (country)
    VALUE
    ("Antartica")