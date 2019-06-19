import React, { Component } from 'react';

import * as S from './styled';

export default class Compose extends Component {
  render() {
    return (
      <S.ComposeRoot>
        <S.ComposeInput
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
        />

        {
          this.props.rightItems
        }
      </S.ComposeRoot>
    );
  }
}
