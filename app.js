// const express = require('express');
// const { Pool } = require('pg')
// const app = express();
// const port = 3000;
// const path = require('path');


// const config = {
//     user: "postgres",
//     host: 'localhost',
//     password: 'dube3342537',
//     database: 'library'
// }


// const pool = new Pool(config);


// app.use('/', express.static(path.join(__dirname, 'views')));

// app.get('/books', async (req, res) => {
//     try {
//         const response = await pool.query('select * from books');
//         libros = response.rows
//         console.log(libros);
//         res.json(libros);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Error al obtener los libros.' });
//     }
// });

// app.get('/users', async (req, res) => {
//     try {
//         const response = await pool.query('select * from users');
//         const users = response.rows
//         res.json(users);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Error al obtener los usuarios.' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Servidor escuchando en http://localhost:${port}`);
// });
// const { Client } = require('pg')
// const obtenerdatos = async () => {

//     const client = new Client({
//         user: 'postgres',
//         host: 'viaduct.proxy.rlwy.net',
//         database: 'railway',
//         password: '4C5DaBfga--ADEEAbB64GB1-aAc3gdDB',
//         port: '12468',
//     })
//     await client.connect()

//     const res = await client.query('select * from trabajadores')
//     const resultado = res.rows
//     console.log(resultado);
//     await client.end()
// }

// obtenerdatos();

const { Client } = require('pg');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('views')); // Carpeta para archivos estáticos (HTML)

app.get('/obtenerdatos', async (req, res) => {
  try {
    const client = new Client({
      user: 'postgres',
      host: 'roundhouse.proxy.rlwy.net',
      database: 'railway',
      password: 'eabEDfG*536E*3C2a*g6gc*343G-db3B',
      port: '56155',
    });

    await client.connect();

    const result = await client.query('SELECT * FROM trabajadores');
    const trabajadores = result.rows;

    await client.end();

    res.json(trabajadores);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

