import React, { Component } from 'react';
import axios from 'axios'

import Search from './Search';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      result: null,
    }
  }

  handleChange(e) {
    this.setState({
      searchQuery: e.target.value,
    })
  }

  handleSearch(e) {
    e.preventDefault();
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchQuery}&api_key=vmXWBZrFG1w1CnM5nzMjzkIrk0iD2ABy&rating=pg`)
    .then((response) => {
      this.setState({
        result: response.data,
      });
    });
  }

  render() {
    return (
      <section className="home">
        <Search handleChange={e => this.handleChange(e)} handleSearch={e => this.handleSearch(e)} />
      </section>
    );
  }
}

export default Home;
