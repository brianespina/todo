CREATE DATABASE simpletodo;

CREATE TABLE todos(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    status VARCHAR(255)
);