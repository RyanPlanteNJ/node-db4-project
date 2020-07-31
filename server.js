const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const db = require('./data/db-config.js');

const recipesRouter = require('./recipes/recipes-router.js');
const ingreidentsRouter = require('./recipes/ingredients-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

server.use('/api/recipes', recipesRouter)
server.use('/api/ingredients', ingredientsRouter)

server.get('/', (req, res) => {
  res.status(200).json({api: "up and running and ready for recipes"})
})

module.exports = server;
