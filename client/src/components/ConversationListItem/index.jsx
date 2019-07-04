import React, {
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import shave from 'shave';

import * as S from './styled';

const ConversationListItem = ({ data, onClick, selected}) => {
  useEffect(() => {
    shave('.conversation-snippet', 20);
  }, []);

  const { photo, subject, messages } = data;

  return (
    <S.ConversationListItemRoot onClick={onClick} selected={selected}>
      <S.ConversationPhoto
        photo={photo || 'https://png.pngtree.com/svg/20170504/a4ebc5629c.svg'}
      />
      <div>
        <S.ConversationTitle>{ subject }</S.ConversationTitle>
        <S.ConversationSnippet className="conversation-snippet">
          { messages[messages.length - 1]?.message || 'This thread is empty' }
        </S.ConversationSnippet>
      </div>
    </S.ConversationListItemRoot>
  );
};

ConversationListItem.propTypes = {
  data: PropTypes.shape({
    photo: PropTypes.string,
    subject: PropTypes.string,
    messages: PropTypes.array,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default ConversationListItem;
