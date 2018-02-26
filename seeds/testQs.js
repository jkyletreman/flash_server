
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flashcards').del()
    .then(function () {
      // Inserts seed entries
      return knex('flashcards').insert([
        {id: 1, question:'2 + 2', answer:'4'},
        {id: 2, question:'2 + 210', answer:'212'},
        {id: 3, question:'What is the color of the sky?', answer:'blue'},
        {id: 4, question:'The opposite of up is?', answer:'down'},
        {id: 5, question:'Why am I here?', answer:'To teach us'},
        {id: 6, question:'Why are you here?', answer:'To learn'},
        {id: 7, question:'Fish live in the...', answer:'Ocean'},
        {id: 8, question:'The best pizza is in...', answer:'NYC'}, 
      ]);
    });
};
