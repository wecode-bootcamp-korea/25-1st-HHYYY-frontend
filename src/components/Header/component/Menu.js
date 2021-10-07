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
    const { onMouseEnter } = this.props;
    return (
      <div className="menu" onMouseEnter={onMouseEnter}>
        {MENU_LIST.map(mainmenu => {
          const { id, menu, menuLink } = mainmenu;
          return (
            <ul key={id}>
              <li key={id}>
                <Link to={menuLink}>{menu}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default Menu;
