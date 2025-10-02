# Proyecto GestionClientes

Este proyecto es una aplicación de gestión de clientes desarrollada con **Spring Boot** en el backend, **Angular** en el frontend y **PostgreSQL** como base de datos.

---

## Estructura del proyecto

```
GestionClientes/
├── backend/          # Proyecto Spring Boot (Java + Maven/Gradle)
├── frontend/         # Proyecto Angular
├── db/               # Scripts de base de datos PostgreSQL
│   ├── creaciondatabase.sql
│   ├── creaciontablas.sql
│   └── registrosdeprueva.sql
└── README.md
```

---

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v18 o superior)
- [Angular CLI](https://angular.io/cli) (última versión estable)
- [Java JDK 17](https://adoptium.net/) (o compatible con Spring Boot)
- [Maven](https://maven.apache.org/) (si no usas wrapper)
- [PostgreSQL](https://www.postgresql.org/) (v14 o superior)
- [Git](https://git-scm.com/)

---

## Scripts de Base de Datos (PostgreSQL)

  Dentro de la carpeta `/db` estarán los siguientes archivos:

### `creaciondatabase.sql`
```sql
-- Crear la base de datos para GestionClientes
DROP DATABASE IF EXISTS gestion_clientes;
CREATE DATABASE gestion_clientes;
```

### `creaciontablas.sql`
```sql
-- Crear tabla clientes
DROP TABLE IF EXISTS clientes;

CREATE TABLE clientes (
    id BIGSERIAL PRIMARY KEY,                -- autoincremental
    nombre VARCHAR(50) NOT NULL,             -- obligatorio, máx 50
    apellido VARCHAR(50) NOT NULL,           -- obligatorio, máx 50
    correo VARCHAR(100) NOT NULL UNIQUE,     -- obligatorio, válido y único
    telefono VARCHAR(9),                     -- opcional, 9 dígitos
    fecha_registro TIMESTAMP NOT NULL DEFAULT NOW(), -- autogenerada
    estado BOOLEAN NOT NULL DEFAULT TRUE     -- activo/inactivo
);
```

### `registrosdeprueva.sql`
```sql
-- Insertar 15 registros de prueba en la tabla clientes
INSERT INTO clientes (nombre, apellido, correo, telefono, estado)
VALUES
  ('Ana', 'Ramírez', 'ana.ramirez@example.com', '987111222', TRUE),
  ('Luis', 'Torres', 'luis.torres@example.com', '987333444', TRUE),
  ('Gabriela', 'Mendoza', 'gabriela.mendoza@example.com', NULL, FALSE),
  ('Pedro', 'Castro', 'pedro.castro@example.com', '987555666', TRUE),
  ('Sofía', 'Fernández', 'sofia.fernandez@example.com', '987777888', TRUE),
  ('Hugo', 'Reyes', 'hugo.reyes@example.com', '987999000', FALSE),
  ('Elena', 'Martínez', 'elena.martinez@example.com', '986111333', TRUE),
  ('Andrés', 'Vargas', 'andres.vargas@example.com', NULL, TRUE),
  ('Lucía', 'Morales', 'lucia.morales@example.com', '985444555', FALSE),
  ('Ricardo', 'Silva', 'ricardo.silva@example.com', '985666777', TRUE),
  ('Valeria', 'Campos', 'valeria.campos@example.com', '985888999', TRUE),
  ('Miguel', 'Soto', 'miguel.soto@example.com', NULL, FALSE),
  ('Camila', 'Aguilar', 'camila.aguilar@example.com', '984222333', TRUE),
  ('Diego', 'Romero', 'diego.romero@example.com', '984444555', TRUE),
  ('Fernanda', 'Flores', 'fernanda.flores@example.com', '984666777', FALSE);
```

---

## Ejecución del Backend (Spring Boot)

1. Entrar a la carpeta del backend:
   ```bash
   cd backend
   ```

2. Compilar y ejecutar:
   ```bash
   mvn spring-boot:run
   ```

3. El backend se levantará en:
   ```
   http://localhost:8080
   ```

---

## Ejecución del Frontend (Angular)

1. Entrar a la carpeta del frontend:
   ```bash
   cd frontend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar en modo desarrollo:
   ```bash
   ng serve -o
   ```

4. El frontend estará disponible en:
   ```
   http://localhost:4200
   ```

---

## Conexión Backend - Frontend

- El frontend (Angular) consume la API RESTFULL expuesta por el backend (Spring Boot).
- Verifica que las URLs del **service** en Angular apunten a:
  ```
  http://localhost:8080/clientes
  ```

---

## Autores

- **[Yerson Sandoval Rivas]** – Desarrollador principal  

---

## Licencia

Este proyecto es de uso académico y libre para pruebas.
