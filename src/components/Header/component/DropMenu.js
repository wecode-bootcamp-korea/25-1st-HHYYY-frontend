import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MENU_LIST from './MenuData';

class DropMenu extends Component {
  render() {
    return (
      <div className="dropMenu">
        {MENU_LIST.map(e => {
          return (
            <ul>
              <li key={e.subMenu1}>
                <Link to={e.subMenu1Link}>{e.subMenu1}</Link>
              </li>
              <li key={e.subMenu2}>
                <Link to={e.subMenu2Link}>{e.subMenu2}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default DropMenu;
