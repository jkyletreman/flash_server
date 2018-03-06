const knex = require('../db')

// find all
function findCard() {
  return knex('flashcards');
}
// create
function createCard({ params: { card_id }, body: { question, answer }}) {
  return knex('flashcards')
    .returning('*')
    .insert({ question, answer, card_id });
}

module.exports = {
  findCard,
  createCard
}
