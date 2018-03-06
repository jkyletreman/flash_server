
exports.up = function(knex, Promise) {
  return knex.schema.createTable('flashcards', (table) => {
    table.increments();
    table.string('question', 150).notNull();
    table.text('answer').notNull();
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('flashcards');
};
