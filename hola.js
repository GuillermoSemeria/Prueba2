const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'libros'
});

connection.connect((error) => {
  if (error) {
    console.log('Error al conectarse a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Leer todos los registros
app.get('/libros', (req, res) => {
  connection.query('SELECT * FROM libros', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

// Leer un registro por ID
app.get('/libros/:id', (req, res) => {
  const { id } = req.params;
  connection.query(`SELECT * FROM libros WHERE id=${id}`, (error, results) => {
    if (error) throw error;
    res.send(results[0]);
  });
});

// Crear un nuevo registro
app.post('/libros', (req, res) => {
  const { nombre, editorial,autor,paginas,lanzamiento } = req.body;
  connection.query(`INSERT INTO libros (nombre,editorial,autor,paginas,lanzamiento ) VALUES ('${nombre}', '${editorial}', '${autor}', '${paginas}', '${lanzamiento}')`, (error, results) => {
    if (error) throw error;
    res.send('Registro creado exitosamente');
  });
});

// Actualizar un registro existente
app.put('/libros/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, editorial,autor,paginas,lanzamiento } = req.body;
  connection.query(`UPDATE libros SET editorial='${editorial}',autor='${autor}',paginas='${paginas}',lanzamiento='${lanzamiento}', nombre='${nombre}' WHERE id=${id}`, (error, results) => {
    if (error) throw error;
    res.send('Registro actualizado exitosamente');
  });
});

// Eliminar un registro existente
app.delete('/libros/:id', (req, res) => {
  const { id } = req.params;
  connection.query(`DELETE FROM libros WHERE id=${id}`, (error, results) => {
    if (error) throw error;
    res.send('Registro eliminado exitosamente');
  });
});

app.listen(3000, () => {
    console.log('API escuchando en el puerto 3000');
  });


--comando necesarios
git add .
git commit -m "nombre"
git push origin main
git checkout "direccion comit" ir a master o ir a main

git clone "direccion"

npm init
npm install express mysql cors body-parser
node index.js
