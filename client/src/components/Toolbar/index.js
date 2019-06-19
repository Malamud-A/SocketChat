import React, { Component } from 'react';

import * as S from './styled';

export default class Toolbar extends Component {
  render() {
    const { title, leftItems, rightItems } = this.props;
    return (
      <S.ToolbarRoot>
        <S.Items>{ leftItems }</S.Items>
        <S.ToolbarTitle>{ title }</S.ToolbarTitle>
        <S.Items right>{ rightItems }</S.Items>
      </S.ToolbarRoot>
    );
  }
}
