import React, { Component } from 'react';
import TitleBanner from './Article/TitleBanner';
import ContentWrap from './Article/ContentWrap/ContentWrap';
import BannerWrap from './Article/BannerWrap';
import './Section.scss';

class Main extends Component {
  render() {
    return (
      <section className="mainSection">
        <TitleBanner />
        <ContentWrap />
        <BannerWrap />
      </section>
    );
  }
}
export default Main;
