import React, { Component } from 'react';
import FooterIcons from './FooterIcons/FooterIcons';
import LeftWrap from './LeftWrap/LeftWrap';
import MainWrap from './MainWrap/MainWrap';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerIcons">
          <FooterIcons />
        </div>
        <div className="mainFooter">
          <div className="leftWrap">
            <LeftWrap />
          </div>
          <div className="mainWrap">
            <MainWrap />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
