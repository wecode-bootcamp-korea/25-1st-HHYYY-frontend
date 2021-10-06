import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MENU_LIST from './MenuData';

class DropMenu extends Component {
  render() {
    return (
      <div className="dropMenu">
        {MENU_LIST.map(category => {
          return (
            <ul key={category.menu}>
              <li key={category.subMenu1}>
                <Link to={category.subMenu1Link}>{category.subMenu1}</Link>
              </li>
              <li key={category.subMenu2}>
                <Link to={category.subMenu2Link}>{category.subMenu2}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default DropMenu;
