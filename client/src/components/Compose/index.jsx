import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Compose = ({
  rightItems,
  socket,
  selectedConversation,
  userId,
}) => {
  const [message, setMessage] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', {
      message,
      conversation: selectedConversation.conversation_id,
      author: userId,
    });
    setMessage('');
  };

  return (
    <S.ComposeRoot>
      <S.ComposeForm onSubmit={onSubmit}>
        <S.ComposeInput
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </S.ComposeForm>
      {
        rightItems
      }
    </S.ComposeRoot>
  );
};

Compose.propTypes = {
  rightItems: PropTypes.array.isRequired,
  socket: PropTypes.object,
  selectedConversation: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
};

Compose.defaultProps = {
  socket: {},
};

export default Compose;
