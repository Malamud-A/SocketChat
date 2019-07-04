import React from 'react';
import PropTypes from 'prop-types';

import {
  ToolbarButtonRoot,
} from '../styled';

const ToolbarButton = ({ icon, onClick, submit }) => (
  <ToolbarButtonRoot onClick={onClick} className={`${icon}`} submit={submit}/>
);

ToolbarButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  submit: PropTypes.bool,
};

ToolbarButton.defaultProps = {
  onClick: () => {},
  submit: false,
};

export default ToolbarButton;
