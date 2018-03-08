const knex = require('../db')

// find all
function findCard() {
  return knex('flashcards');
}
// create
function createCard({ body: { question, answer }}) {
  return knex('flashcards')
    .returning('*')
    .insert({ question, answer });
}

module.exports = {
  findCard,
  createCard
}
