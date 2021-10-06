import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MENU_LIST from './MenuData';
import './menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
    };
  }

  componentDidMount() {
    fetch('')
      .then(res => res.json())
      .then(data => {
        this.setState({ menu: data });
      });
  }

  render() {
    const { mouseEvent } = this.props;
    return (
      <div className="menu" onMouseEnter={mouseEvent}>
        {MENU_LIST.map(menu => {
          return (
            <ul key={menu.id}>
              <li key={menu.id}>
                <Link to={menu.menuLink}>{menu.menu}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default Menu;
