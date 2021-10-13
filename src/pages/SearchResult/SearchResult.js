import React, { Component } from 'react';
import ResultPage from './ResultPage';
import './SearchResult.scss';

class SearchResult extends Component {
  render() {
    return (
      <div className="container">
        <ResultPage />;
      </div>
    );
  }
}

export default SearchResult;
