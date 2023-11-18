
---CREAR TABLA
CREATE TABLE empleados (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    direccion VARCHAR(255),
    numero_telefono VARCHAR(20),
    correo_electronico VARCHAR(100),
    puesto VARCHAR(50),
    salario NUMERIC(10, 2),
    fecha_contratacion DATE
);

-- INSERTA LOS DATOS DE LOS EMPLEADOS EN LA TABLA INDICADA
INSERT INTO empleados VALUES
    (DEFAULT, 'Luisa Mendoza', 'Calle 567, Caracas', '+5888776655', 'luisa@example.com', 'Analista de Datos', 62000.50, '2021-09-05'),
    (DEFAULT, 'Eduardo Ramirez', 'Avenida 789, Caracas', '+5822334455', 'eduardo@example.com', 'Ingeniero de Software', 80000.75, '2020-07-15'),
    (DEFAULT, 'Laura Torres', 'Calle 123, Caracas', '+5844556677', 'laura@example.com', 'Diseñadora Gráfica', 55000.25, '2022-02-28'),
    (DEFAULT, 'Roberto Fernández', 'Avenida 456, Caracas', '+5866778899', 'roberto@example.com', 'Analista de Sistemas', 70000.80, '2019-12-10');

----BORRAR TODOS LOS DATOS DE LA TABLA EMPLEADOS
DELETE FROM empleados;
---BORRAR TABLA
DROP TABLE empleados 





CREATE TABLE departamentos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    numero_empleados INTEGER
);

INSERT INTO departamentos VALUES
    (DEFAULT, 'Ventas', 'Departamento encargado de las ventas de la empresa.', 15),
    (DEFAULT, 'Recursos Humanos', 'Departamento responsable de la gestión del personal.', 8),
    (DEFAULT, 'Desarrollo', 'Departamento de desarrollo de software.', 20),
    (DEFAULT, 'Soporte Técnico', 'Departamento de soporte para los clientes.', 12);

DELETE FROM departamentos;
DROP TABLE departamentos 





CREATE TABLE puestos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    remuneracion NUMERIC(10, 2)
);

INSERT INTO puestos (nombre, descripcion, remuneracion) VALUES
    ('Analista de Ventas', 'Responsable de analizar y gestionar las ventas de la empresa.', 50000.00),
    ('Especialista en Recursos Humanos', 'Encargado de la gestión y desarrollo del personal.', 60000.50),
    ('Desarrollador Senior', 'Programador con experiencia y habilidades avanzadas en desarrollo de software.', 75000.75),
    ('Soporte Tecnico', 'Brinda asistencia técnica a los clientes y soluciona problemas técnicos.', 48000.25);

DELETE FROM puestos;
DROP TABLE puestos; 






CREATE TABLE tareas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    tiempo_estimado INTEGER
);

INSERT INTO tareas VALUES
    (DEFAULT, 'Desarrollar nueva funcionalidad', 'Crear y probar una nueva funcionalidad en el software existente.', 20),
    (DEFAULT, 'Entrenamiento de nuevos empleados', 'Realizar sesiones de formación para nuevos miembros del equipo.', 15),
    (DEFAULT, 'Resolver incidencias de soporte', 'Atender y resolver problemas técnicos reportados por los clientes.', 10),
    (DEFAULT, 'Revisión de informes financieros', 'Examinar y analizar informes financieros para detectar posibles errores.', 30);

DELETE FROM tareas;
DROP TABLE tareas






CREATE TABLE habilidades (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    nivel_dominio VARCHAR(50),
    fecha_adquisicion DATE
);

INSERT INTO habilidades VALUES
    (DEFAULT, 'Programacion en Java', 'Avanzado', '2022-01-15'),
    (DEFAULT, 'Gestión de Proyectos', 'Intermedio', '2021-08-22'),
    (DEFAULT, 'Inglés', 'Basico', '2020-05-10'),
    (DEFAULT, 'Diseño Grafico', 'Avanzado', '2022-03-01');

DELETE FROM habilidades
DROP TABLE habilidades
