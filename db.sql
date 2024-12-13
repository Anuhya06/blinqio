CREATE DATABASE task_manager;
USE task_manager;

CREATE TABLE users(
id INT auto_increment primary KEY,
username VARCHAR(100) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks(
id INT auto_increment primary KEY,
userId INT NOT NULL,
task VARCHAR(255) NOT NULL,
FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);




