import React from 'react';
import PropTypes from 'prop-types';
import {
  DateTime,
} from 'luxon';

import * as S from './styled';

const Message = ({
  data,
  isMine,
  startsSequence,
  endsSequence,
  showTimestamp,
}) => {
  const friendlyTimestamp = DateTime.fromMillis(data.timestamp).toFormat('DDDD t');
  return (
    <S.MessageContainer
      mine={isMine}
      end={endsSequence}
      start={startsSequence}
    >
      {
        showTimestamp && (
          <S.Timestamp>
            {friendlyTimestamp}
          </S.Timestamp>
        )
      }
      <S.BubbleContainer>
        <S.Bubble title={friendlyTimestamp}>
          {data.message}
        </S.Bubble>
      </S.BubbleContainer>
    </S.MessageContainer>
  );
};

Message.propTypes = {
  data: PropTypes.object.isRequired,
  isMine: PropTypes.bool.isRequired,
  startsSequence: PropTypes.bool.isRequired,
  endsSequence: PropTypes.bool.isRequired,
  showTimestamp: PropTypes.bool.isRequired,
};

export default Message;
