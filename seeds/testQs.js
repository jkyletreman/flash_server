
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flashcards').del()
    .then(function () {
      // Inserts seed entries
      return knex('flashcards').insert([
        { question:'2 + 2', answer:'4'},
        { question:'2 + 210', answer:'212'},
        { question:'What is the color of the sky?', answer:'blue'},
        { question:'The opposite of up is?', answer:'down'},
        { question:'Why am I here?', answer:'To teach us'},
        { question:'Why are you here?', answer:'To learn'},
        { question:'Fish live in the...', answer:'Ocean'},
        { question:'The best pizza is in...', answer:'NYC'},
      ]);
    });
};
