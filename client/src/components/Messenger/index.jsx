import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import Modals from '../Modals';

import * as S from './styled';

const Messenger = ({ store, dispatch }) => {
  const [addConvModal, setAddConvModal] = useState(false);
  const toggleModal = () => {
    setAddConvModal(!addConvModal);
  };

  return (
    <S.MessengerRoot>
      <S.Sidebar scrollable>
        <ConversationList
          toggleModal={toggleModal}
          conversations={store.conversations}
          selectedConversation={store.selectedConversation}
          dispatch={dispatch}
        />
      </S.Sidebar>

      <S.Content scrollable>
        <MessageList
          conversations={store.conversations}
          selectedConversation={store.selectedConversation}
          userId={store.userId}
          socket={store.socket}
        />
      </S.Content>
      <Modals.addConversation
        isOpen={addConvModal}
        toggleModal={toggleModal}
        socket={store.socket}
      />
    </S.MessengerRoot>
  );
};

Messenger.propTypes = {
  store: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Messenger;
