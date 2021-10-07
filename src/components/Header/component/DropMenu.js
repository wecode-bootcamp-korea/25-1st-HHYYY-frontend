import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DROP_LIST from './DropMenuData';
import './dropMenu.scss';

class DropMenu extends Component {
  render() {
    return (
      <div className="dropMenu">
        {DROP_LIST.map(submenu => {
          const { id, subMenu1, subMenu1Link, subMenu2, subMenu2Link } =
            submenu;
          return (
            <ul key={id}>
              <li class name="dropMenuList" key={subMenu1}>
                <Link to={subMenu1Link}>{subMenu1}</Link>
              </li>
              <li key={subMenu2}>
                <Link to={subMenu2Link}>{subMenu2}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default DropMenu;
