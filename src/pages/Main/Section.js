import React, { Component } from 'react';
import TitleBanner from './Article/TitleBanner';
import ContentWrap from './Article/ContentWrap/ContentWrap';
import BannerWrap from './Article/BannerWrap';
import NewProductWrap from './Article/NewProductWrap';
import './Section.scss';

class Section extends Component {
  render() {
    return (
      <section className="section">
        <TitleBanner />
        <ContentWrap />
        <BannerWrap />
        <NewProductWrap />
      </section>
    );
  }
}

export default Section;
