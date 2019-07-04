import * as constants from './constants';

export const initSocket = payload => ({
  type: constants.INIT_SOCKET,
  payload,
});

export const setStateFromSocket = payload => ({
  type: constants.SET_STATE_FROM_SOCKET,
  payload,
});

export const selectConversation = payload => ({
  type: constants.SELECT_CONVERSATION,
  payload,
});

export const sendMessage = payload => ({
  type: constants.SEND_MESSAGE,
  payload,
});

export const addConversation = payload => ({
  type: constants.ADD_CONVERSATION,
  payload,
});

export const setUserId = payload => ({
  type: constants.SET_USER_ID,
  payload,
});
