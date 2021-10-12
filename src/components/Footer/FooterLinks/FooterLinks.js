import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterLinks extends Component {
  render() {
    const { link, content } = this.props;
    return (
      <li>
        <Link to={link} />
        {content}
      </li>
    );
  }
}

export default FooterLinks;
