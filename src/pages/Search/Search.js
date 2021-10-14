import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearch: [],
      searchWord: '',
      isSearch: false,
    };
  }

  componentDidMount() {
    fetch('#')
      .then(response => response.json())
      .then(data => {
        this.setState({ inputSearch: data });
      });
  }

  handleSearchWord = e => {
    this.setState({
      searchWord: e.target.value,
    });
  };

  handelerSearch = () => {
    const { isSearch } = this.state;
    this.setState({ isSearch: !isSearch });
  };

  handleSearchResult = e => {
    const { searchWord } = this.state;
    e.preventDefault();
    if (searchWord.length > 0) {
      this.props.history.push('/search-result');
    }
  };

  render() {
    // console.log(this.state.searchWord);
    // const { inputSearch, searchWord } = this.state;
    // const filtered = inputSearch.filter(searchdata =>
    //   searchdata.name.includes(searchWord)
    // );
    return (
      <div className="search">
        <input
          name="searched"
          className="searchInput"
          type="search"
          placeholder="더 풍성하게 돌아온 NEW 기프트"
          onChange={this.handleSearchWord}
        />
        <button
          className="searchBtn"
          onClick={this.handleSearchResult}
          searchWord={this.state.searchWord}
        >
          <i className="fas fa-search fa-2x" />
        </button>
      </div>
    );
  }
}

export default withRouter(Search);
