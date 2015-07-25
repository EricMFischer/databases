CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  objectId int NOT NULL AUTO_INCREMENT,
  username varchar(20),
  message varchar(200),
  roomname varchar(20),
  PRIMARY KEY (objectId)
);


CREATE TABLE username (
  /* Describe your table here.*/
  username varchar(20)

);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

