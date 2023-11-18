

const { Client } = require('pg');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('views')); 


app.get('/empleados', async (req, res) => {
  try {

    const client = new Client({
        user: 'postgres',
        host: 'roundhouse.proxy.rlwy.net',
        database: 'railway',
        password: 'eabEDfG*536E*3C2a*g6gc*343G-db3B',
        port: '56155',
        client_encoding: 'utf-8',
      });

    await client.connect();

    const result = await client.query('SELECT * FROM empleados');
      console.log(result.rows);
    const trabajadores = result.rows;
    await client.end();
    res.json(trabajadores);
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/departamentos', async (req, res) => {
    try {
  
      const client = new Client({
          user: 'postgres',
          host: 'roundhouse.proxy.rlwy.net',
          database: 'railway',
          password: 'eabEDfG*536E*3C2a*g6gc*343G-db3B',
          port: '56155',
        });
  
      await client.connect();
  
      const result = await client.query('SELECT * FROM departamentos');
      const departamentos = result.rows;
      
      await client.end();
  
      res.json(departamentos);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/puestos', async (req, res) => {
    try {
  
      const client = new Client({
          user: 'postgres',
          host: 'roundhouse.proxy.rlwy.net',
          database: 'railway',
          password: 'eabEDfG*536E*3C2a*g6gc*343G-db3B',
          port: '56155',
        });
  
      await client.connect();
  
      const result = await client.query('SELECT * FROM puestos');
      const puestos = result.rows;
      
      await client.end();
  
      res.json(puestos);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/tareas', async (req, res) => {
    try {
  
      const client = new Client({
          user: 'postgres',
          host: 'roundhouse.proxy.rlwy.net',
          database: 'railway',
          password: 'eabEDfG*536E*3C2a*g6gc*343G-db3B',
          port: '56155',
        });
  
      await client.connect();
  
      const result = await client.query('SELECT * FROM tareas');
      const tareas = result.rows;
      
      await client.end();
  
      res.json(tareas);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/habilidades', async (req, res) => {
    try {
  
      const client = new Client({
          user: 'postgres',
          host: 'roundhouse.proxy.rlwy.net',
          database: 'railway',
          password: 'eabEDfG*536E*3C2a*g6gc*343G-db3B',
          port: '56155',
        });
  
      await client.connect();
  
      const result = await client.query('SELECT * FROM habilidades');
      const habilidades = result.rows;
      
      await client.end();
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.json(habilidades);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

