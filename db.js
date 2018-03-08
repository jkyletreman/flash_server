const devConfig = require('./knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(devConfig);

module.exports = knex;
