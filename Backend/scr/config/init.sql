-- Active: 1734883751913@@127.0.0.1@5432@likeme
CREATE TABLE post (
  id SERIAL,
  titulo VARCHAR(25),
  img VARCHAR(1000),
  descripcion VARCHAR(255),
  likes INT);