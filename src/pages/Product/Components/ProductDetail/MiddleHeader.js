import React, { Component } from 'react';
import './MiddleHeader.scss';

class MiddleHeader extends Component {
  render() {
    const { name } = this.props;
    return (
      <header className="articleGuide">
        <h2 class="guideText">{name}</h2>
      </header>
    );
  }
}

export default MiddleHeader;
