import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from './component/Menu';
import DropMenu from './component/DropMenu';
import Search from '../../pages/Search/Search';
import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isSearch: false,
    };
  }

  handlerDropdownOpen = () => {
    const { isDropdownOpen } = this.state;
    this.setState({
      isDropdownOpen: !isDropdownOpen,
    });
  };

  handelerSearch = () => {
    const { isSearch } = this.state;
    this.setState({ isSearch: !isSearch });
  };

  render() {
    const { isDropdownOpen, isSearch } = this.state;
    return (
      <header className="header">
        <nav>
          <div className="logo">
            <Link to="/main" className="logo">
              훈훈한 연들
            </Link>
          </div>
          <Menu onMouseEnter={this.handlerDropdownOpen} />
          <div className="menuIcons">
            <ul>
              <li className="menuIconsList" onClick={this.handelerSearch}>
                <i className="fas fa-search" />
              </li>
              <li className="menuIconsList">
                <i className="fas fa-shopping-bag" />
              </li>
              <li className="menuIconsList">
                <i className="fas fa-user-circle" />
              </li>
            </ul>
          </div>
        </nav>
        {isDropdownOpen && <DropMenu />}
        {isSearch && <Search />}
      </header>
    );
  }
}

export default Header;
