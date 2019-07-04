const knex = require('../conection');

function getAllConversations(userId) {
  return knex('users_conversations')
    .select('conversation_id')
    .where({user_id: userId})
    .then((users_conversations) => {
      const conversationPromises = [];
      users_conversations.forEach((u_c) => {
        conversationPromises.push(
          knex('conversations')
            .select('*')
            .where({conversation_id: u_c.conversation_id})
        )
      });
      return Promise.all(conversationPromises)
    });
}

function getSingleConversation(id) {
  return knex('conversations')
    .select('*')
    .where({id: parseInt(id)})
}

function addConversation(payload, userId) {
  return knex('conversations')
    .insert(payload)
    .returning('*')
    .then(([conversation]) => {
      console.log('added conv', conversation);
      return knex('users_conversations')
        .insert({
          user_id: userId,
          conversation_id: conversation.conversation_id
        })
        .returning('conversation_id')
        .then(([conversation_id]) => {
          return knex('conversations')
            .select('*')
            .where({conversation_id});
        })
    })
}

function getConversationParticipants(id) {
  return knex('users_conversations')
    .select('user_id')
    .where({conversation_id: id})
}

module.exports = {
  getAllConversations,
  getSingleConversation,
  addConversation,
  getConversationParticipants,
};
