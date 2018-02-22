const devConfig = require('./knexfile').development;
const knex = require('knex')(devConfig);

module.exports = knex;
