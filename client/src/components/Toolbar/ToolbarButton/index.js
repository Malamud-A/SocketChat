import React, { Component } from 'react';

import { ToolbarButtonRoot } from '../styled';

export default class ToolbarButton extends Component {
  render() {
    const { icon } = this.props;
    return (
      <ToolbarButtonRoot className={`${icon}`} />
    );
  }
}
