import * as constants from './constants';

export default (state, action) => {
  switch (action.type) {
    case constants.INIT_SOCKET:
      return {
        ...state,
        socket: action.payload,
      };
    case constants.SET_STATE_FROM_SOCKET:
      return {
        ...state,
        ...action.payload,
      };
    case constants.SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case constants.SELECT_CONVERSATION:
      return {
        ...state,
        selectedConversation: action.payload,
      };
    case constants.ADD_CONVERSATION:
      return {
        ...state,
        conversations: [
          ...state.conversations,
          action.payload,
        ],
      };
    case constants.SEND_MESSAGE:
      return {
        ...state,
        conversations: [
          ...state.conversations.filter(
            conversation => conversation.conversation_id !== action.payload.conversation_id,
          ),
          action.payload,
        ],
      };
    default:
      return state;
  }
};
