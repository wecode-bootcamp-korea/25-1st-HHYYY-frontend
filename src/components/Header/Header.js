import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from './component/Menu';
import DropMenu from './component/DropMenu';
import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }
  render() {
    return (
      <header className="header">
        <nav>
          <div className="logo">
            <Link to="/main">훈훈한 연들</Link>
          </div>
          <Menu />
          <div className="menuIcons">
            <ul>
              <li>
                <i className="fas fa-search" />
              </li>
              <li>
                <i className="fas fa-shopping-bag" />
              </li>
              <li>
                <i className="fas fa-user-circle" />
              </li>
            </ul>
          </div>
        </nav>
        {<DropMenu />}
      </header>
    );
  }
}

export default Header;
