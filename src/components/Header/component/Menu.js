import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MENU_LIST from './MenuData';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        {MENU_LIST.map(e => {
          return (
            <li key={e.menu}>
              <Link to={e.menuLink}>{e.menu}</Link>
            </li>
          );
        })}
      </div>
    );
  }
}

export default Menu;
