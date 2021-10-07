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
            <Link to="/main">훈훈한 연들</Link>
          </div>
          <Menu onMouseEnter={this.handlerDropdownOpen} />
          <div className="menuIcons">
            <ul>
              <li onClick={this.handelerSearch}>
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
        <DropMenu />
        {/* {isDropdownOpen && <DropMenu />} */}
        {isSearch && <Search />}
      </header>
    );
  }
}

export default Header;
