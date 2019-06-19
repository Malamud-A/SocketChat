import React, { Component } from 'react';

import * as S from './styled';

export default class ConversationSearch extends Component {
  render() {
    return (
      <S.ConversationSearchContainer>
        <S.ConversationSearchInput
          type="search"
          placeholder="Search Messages"
        />
      </S.ConversationSearchContainer>
    );
  }
}
