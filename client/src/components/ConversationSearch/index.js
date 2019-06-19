import React from 'react';

import * as S from './styled';

const ConversationSearch = () => (
  <S.ConversationSearchContainer>
    <S.ConversationSearchInput
      type="search"
      placeholder="Search Messages"
    />
  </S.ConversationSearchContainer>
);

export default ConversationSearch;
