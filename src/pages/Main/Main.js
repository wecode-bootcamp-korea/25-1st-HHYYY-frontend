import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Section from './Section';
import Footer from '../../components/Footer/Footer';

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Section />
        <Footer />
      </>
    );
  }
}
export default Main;
