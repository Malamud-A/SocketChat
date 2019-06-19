import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Toolbar = ({
  title,
  leftItems,
  rightItems,
}) => (
  <S.ToolbarRoot>
    <S.Items>{ leftItems }</S.Items>
    <S.ToolbarTitle>{ title }</S.ToolbarTitle>
    <S.Items right>{ rightItems }</S.Items>
  </S.ToolbarRoot>
);

Toolbar.propTypes = {
  title: PropTypes.string.isRequired,
  leftItems: PropTypes.array,
  rightItems: PropTypes.array,
};

Toolbar.defaultProps = {
  leftItems: [],
  rightItems: [],
};

export default Toolbar;
