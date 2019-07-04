const knex = require('../conection');

function getAllMessages() {
  return knex('messages')
    .select('*');
}

function addMessage(message) {
  return knex('messages')
    .insert(message)
    .then(() => {
      return knex('conversations')
        .where({conversation_id: message.conversation})
        .update({
          updated_at: knex.fn.now(),
        })
        .returning('*');
    }
  )
}

function getConversationMessage(conversationId) {
  return knex('messages')
    .select([
      'message_id',
      'author',
      'message',
      'created_at',
      'updated_at',
    ])
    .where({conversation: conversationId});
}

module.exports = {
  getAllMessages,
  addMessage,
  getConversationMessage,
};
