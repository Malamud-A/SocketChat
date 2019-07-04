
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_conversations').del()
    .then(function () {
      // Inserts seed entries
      return knex('conversations').first()
        .then((firstConversation) => {
          return knex('users').select()
            .then((users) => {
              return knex('users_conversations').insert([
                {
                  conversation_id: firstConversation.conversation_id,
                  user_id: users[0].user_id,
                },
                {
                  conversation_id: firstConversation.conversation_id,
                  user_id: users[1].user_id,
                },
              ])
            })
        });
    });
};
