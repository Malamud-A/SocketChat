
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('conversations').first()
        .then((firstConversation) => {
          return knex('users').select('*')
            .then((users) => {
              return knex('messages').insert([
                {
                  message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
                  conversation: firstConversation.conversation_id,
                  author: users[0].user_id,
                },
                {
                  message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
                  conversation: firstConversation.conversation_id,
                  author: users[1].user_id,
                },
                {
                  message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
                  conversation: firstConversation.conversation_id,
                  author: users[0].user_id,
                }
              ]);
            })
        })
    });
};


