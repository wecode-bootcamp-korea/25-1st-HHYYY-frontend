import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Menu from './component/Menu';
import DropMenu from './component/DropMenu';
import Search from '../../pages/Search/Search';
import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isClickSearch: false,
    };
  }

  handlerDropdownOpen = e => {
    e.preventDefault();
    const { isDropdownOpen } = this.state;
    this.setState({
      isDropdownOpen: !isDropdownOpen,
    });
  };

  render() {
    return (
      <header className="header">
        <nav>
          <div className="logo">
            <Link to="/main">훈훈한 연들</Link>
          </div>
          <Menu mouseEvent={this.handlerDropdownOpen} />
          <div className="menuIcons">
            <ul>
              <li onClick={this.state.isClickSearch && <Search />}>
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
        {this.state.isDropdownOpen && <DropMenu />}
      </header>
    );
  }
}

export default withRouter(Header);
