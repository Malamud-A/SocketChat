const knex = require('../conection');

function checkUser(userId, username) {
  return knex('users')
    .select('*')
    .where({user_id: userId})
    .then(([user]) => {
      if (!user) return knex('users')
        .insert({
          user_id: userId,
          user_name: username,
        }).returning('*');
      return [user];
    })
}

module.exports = {
  checkUser,
};
