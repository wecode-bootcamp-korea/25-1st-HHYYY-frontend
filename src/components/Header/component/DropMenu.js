import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MENU_LIST from './MenuData';
import './dropMenu.scss';

class DropMenu extends Component {
  render() {
    return (
      <div className="dropMenu">
        {MENU_LIST.map(submenu => {
          return (
            <ul key={submenu.id}>
              <li key={submenu.subMenu1}>
                <Link to={submenu.subMenu1Link}>{submenu.subMenu1}</Link>
              </li>
              <li key={submenu.subMenu2}>
                <Link to={submenu.subMenu2Link}>{submenu.subMenu2}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default DropMenu;
