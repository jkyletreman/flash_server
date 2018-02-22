
exports.up = function(knex, Promise) {
  return knex.schema.createTable('flashcards', (table) => {
    table.increments();
    table.string('collection', 100).defaultTo('main');
    table.string('question', 150).notNull();
    table.text('answer').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('flashcards');
};
