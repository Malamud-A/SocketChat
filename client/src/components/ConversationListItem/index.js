import React, { Component } from 'react';
import shave from 'shave';

import * as S from './styled';

export default class ConversationListItem extends Component {
  componentDidMount() {
    shave('.conversation-snippet', 20);
  }

  render() {
    const { photo, name, text } = this.props.data;

    return (
      <S.ConversationListItemRoot>
        <S.ConversationPhoto src={photo} alt="conversation" />
        <div>
          <S.ConversationTitle>{ name }</S.ConversationTitle>
          <S.ConversationSnippet className="conversation-snippet">{ text }</S.ConversationSnippet>
        </div>
      </S.ConversationListItemRoot>
    );
  }
}
