DROP TABLE IF EXISTS clientes;

CREATE TABLE clientes (
    id BIGSERIAL PRIMARY KEY,                
    nombre VARCHAR(50) NOT NULL,             
    apellido VARCHAR(50) NOT NULL,           
    correo VARCHAR(100) NOT NULL UNIQUE,     
    telefono VARCHAR(9),                     
    fecha_registro TIMESTAMP NOT NULL DEFAULT NOW(), 
    estado BOOLEAN NOT NULL DEFAULT TRUE     
);

