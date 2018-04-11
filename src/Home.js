import React, { Component } from 'react';
import axios from 'axios'

import Search from './Search';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      hasSearched: false,
      result: null,
    }
  }

  handleSearch(e) {
    e.preventDefault();
    axios.get('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=vmXWBZrFG1w1CnM5nzMjzkIrk0iD2ABy&limit=5')
    .then((response) => {
      this.setState({
        result: response.data,
        hasSearched: true,
      });
    });
  }

  render() {
    return (
      <section className="home">
        <Search />
      </section>
    );
  }
}

export default Home;
