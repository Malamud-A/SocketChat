import io from 'socket.io-client';
import {
  setStateFromSocket,
  initSocket,
  sendMessage,
  addConversation,
  setUserId,
} from '../actionCreators';
import utils from '.';

const processUserCookie = () => {
  if (utils.getUUID()) return utils.getUUID();
  const UUID = utils.createUUID();
  document.cookie = `UUID=${UUID}`;
  return UUID;
};

const setupSocket = (dispatch, username = '') => {
  dispatch(setUserId(processUserCookie()));
  // define connection query
  const query = {
    userId: processUserCookie(),
  };
  if (username) query.username = username;

  const socket = io('http://localhost:8000', { query });
  socket.on('initial', (payload) => {
    console.log('socket initial data', payload);
    dispatch(initSocket(socket));
    dispatch(setStateFromSocket(payload));
  });

  socket.on('message', (msg) => {
    console.log('socket msg', msg);
    dispatch(sendMessage(msg));
  });

  socket.on('create conversation', (conversation) => {
    console.log('socket conversation', conversation);
    dispatch(addConversation(conversation));
  });

  return socket;
};

export default setupSocket;
