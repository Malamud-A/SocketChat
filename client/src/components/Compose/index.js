import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Compose = ({ rightItems }) => (
  <S.ComposeRoot>
    <S.ComposeInput
      type="text"
      className="compose-input"
      placeholder="Type a message, @name"
    />

    {
      rightItems
    }
  </S.ComposeRoot>
);

Compose.propTypes = {
  rightItems: PropTypes.array.isRequired,
};

export default Compose;
