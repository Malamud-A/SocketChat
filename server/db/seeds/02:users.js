
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { user_id: require('../../utils/createUUID')(), user_name: 'user_1' },
        { user_id: require('../../utils/createUUID')(), user_name: 'user_2' },
      ]);
    });
};
