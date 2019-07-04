import React from 'react';
import PropTypes from 'prop-types';
import {
  DateTime,
} from 'luxon';

import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../Toolbar/ToolbarButton';
import Message from '../Message';

import * as S from './styled';

const MessageList = ({
  selectedConversation,
  userId,
  socket,
  conversations,
}) => {
  const normalizeMessages = () => conversations.find(
    conv => conv.conversation_id === selectedConversation.conversation_id,
  )?.messages.map(message => ({
    id: message.message_id,
    message: message.message,
    author: message.author,
    timestamp: DateTime.fromISO(message.created_at),
  }));
  /* TODO: maybe this can be refactored */

  const renderMessages = () => {
    console.log('messages render!', normalizeMessages());
    let i = 0;
    const messageCount = normalizeMessages()?.length;
    const res = [];

    while (i < messageCount) {
      const previous = normalizeMessages()[i - 1];
      const current = normalizeMessages()[i];
      const next = normalizeMessages()[i + 1];
      const isMine = current.author === userId;
      const currentMoment = current.timestamp;
      console.log(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        const previousMoment = previous.timestamp;
        const previousDuration = currentMoment.diff(previousMoment);
        prevBySameAuthor = previous.author === current.author;

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        const nextMoment = next.timestamp;
        const nextDuration = nextMoment.diff(currentMoment);
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      res.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />,
      );

      // Proceed to the next message.
      i += 1;
    }

    return res;
  };

  return (
    <div>
      <Toolbar
        title={selectedConversation.subject}
      />

      <S.MessageListContainer>
        {!!normalizeMessages() && renderMessages()}
      </S.MessageListContainer>

      <Compose
        rightItems={[
          <ToolbarButton
            key="send"
            icon="ion-ios-send"
            submit
          />,
        ]}
        socket={socket}
        selectedConversation={selectedConversation}
        userId={userId}
      />
    </div>
  );
};

MessageList.propTypes = {
  selectedConversation: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  socket: PropTypes.object.isRequired,
  conversations: PropTypes.array.isRequired,
};

export default MessageList;
