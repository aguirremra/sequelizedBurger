DROP database burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burgers(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(50),
devoured BOOLEAN DEFAULT FALSE,
pic BLOB,
currdatetime DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);