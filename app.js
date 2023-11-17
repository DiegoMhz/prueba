const express = require('express');
const { Pool } = require('pg')
const app = express();
const port = 3000;
const path = require('path');


const config = {
    user: "postgres",
    host: 'localhost',
    password: 'dube3342537',
    database: 'library'
}


const pool = new Pool(config);


app.use('/', express.static(path.join(__dirname, 'views')));

app.get('/books', async (req, res) => {
    try {
        const response = await pool.query('select * from books');
        libros = response.rows
        res.json(libros);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los libros.' });
    }
});

app.get('/users', async (req, res) => {
    try {
        const response = await pool.query('select * from users');
        const users = response.rows
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los usuarios.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});


