import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import shave from 'shave';

import * as S from './styled';

const ConversationListItem = ({ data }) => {
  useEffect(() => {
    shave('.conversation-snippet', 20);
  }, []);

  const { photo, name, text } = data;

  return (
    <S.ConversationListItemRoot>
      <S.ConversationPhoto src={photo} alt="conversation" />
      <div>
        <S.ConversationTitle>{ name }</S.ConversationTitle>
        <S.ConversationSnippet className="conversation-snippet">{ text }</S.ConversationSnippet>
      </div>
    </S.ConversationListItemRoot>
  );
};

ConversationListItem.propTypes = {
  data: PropTypes.shape({
    photo: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default ConversationListItem;
