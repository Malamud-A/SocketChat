const conversationsQueries = require('./db/queries/conversations');
const messagesQueries = require('./db/queries/messages');
const userQueries = require('./db/queries/users');

module.exports = function (io) {
  io.on('connection', async (socket) => {
    // console.log('socket', s);
    
    const {userId, username} = socket.handshake.query;
    const [ user ] = await userQueries.checkUser(userId, username);
    socket.join(user.user_id);
    const conversations = await conversationsQueries.getAllConversations(userId)
      .map(async conversation => {
        const conversationWithMessages = conversation[0];
        conversationWithMessages.messages = await messagesQueries.getConversationMessage(conversation[0].conversation_id);
        return conversationWithMessages;
      });
    // const messages = await messagesQueries.getAllMessages();
    console.log(`client ${userId} connected`);
    io.sockets.in(user.user_id).emit('initial', {
      conversations,
    });
    socket.on('message', async(msg) => {
      const users = await conversationsQueries.getConversationParticipants(msg.conversation).map(user => user.user_id);
      console.log(users);
      const updatedConv = await messagesQueries.addMessage(msg);
      const conversationWithMessages = updatedConv[0];
      conversationWithMessages.messages = await messagesQueries.getConversationMessage(updatedConv[0].conversation_id);
      users.forEach((user) => {
        io.sockets.in(user).emit('message', conversationWithMessages);
      });
    });
    socket.on('create conversation', async (subject) => {
      const conversations = await conversationsQueries.addConversation({subject}, userId);
      console.log('socket conv', conversations);
      conversations[0].messages = [];
      io.sockets.in(user.user_id).emit('create conversation', conversations[0])
    })
  });
};
