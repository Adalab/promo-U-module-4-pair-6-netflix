const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// create and config server
const server = express();
server.use(cors());
server.use(express.json({ limit: '25mb' }));
server.set('view engine', 'ejs');

async function getConnection() {
  //crear y configurar la conexion
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "ffuunnaaii",
    //password: 'buckBeack',
    database: 'Netflix',
  });

  connection.connect();
  return connection;
}

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get('/movies', async (req, res) => {
  const genreFilterParam = req.query.genre;
  const sortParam = req.query.sort;
  const conn = await getConnection();
  let queryMovies = '';
  if (!genreFilterParam) {
    queryMovies = `SELECT * FROM movies order by title ${sortParam || ''}`;
  } else {
    queryMovies = `SELECT * FROM movies WHERE genre="${genreFilterParam}" order by title ${
      sortParam || ''
    }`;
  }
  const [results, fields] = await conn.query(queryMovies);
  //4. Cerra la conexión
  conn.end();
  res.json({
    success: true,
    movies: results,
  });
});

server.get('/movies/:movieId', async (req, res) => {
  console.log(req.params.movieId);
  const queryMovies = 'SELECT * FROM movies WHERE idMovies=?;';
  const conn = await getConnection();
  const [results] = await conn.query(queryMovies, [req.params.movieId]);
  res.render('movie', {
    movie: results[0],
  });
});

server.post('/sign-up', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const passwordHashed = await bcrypt.hash(password, 10);

  const sql = 'INSERT INTO users(email, password) VALUES (?, ?)';

  const conn = await getConnection();

  const [results] = await conn.query(sql, [email, passwordHashed]);
  conn.end();
  res.json({
    success: true,
    id: results.insertId,
  });
});

const staticServerPathWeb = './src/public-react';
server.use(express.static(staticServerPathWeb));
server.use(express.static("public"));
