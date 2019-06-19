import React from 'react';
import PropTypes from 'prop-types';

import { ToolbarButtonRoot } from '../styled';

const ToolbarButton = ({ icon }) => (
  <ToolbarButtonRoot className={`${icon}`} />
);

ToolbarButton.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default ToolbarButton;
