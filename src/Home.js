import React, { Component } from 'react';
import axios from 'axios'
import { Row, Col } from 'react-materialize'

import Search from './Search';
import Result from './Result';

import './Home.css';

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
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchQuery}&api_key=vmXWBZrFG1w1CnM5nzMjzkIrk0iD2ABy&limit=9&rating=pg`)
    .then((response) => {
      this.setState({
        result: response.data.data,
      });
    });
    console.log(this.state.result);
  }

  render() {
    return (
      <section className="home">
        <Row>
          <Col className="s12 m6 offset-m4"><h4>Search for your favorite thing!</h4></Col>
        </Row>
        <Row>
          <Col className="s12 m6 offset-m5">
            <img src="https://media0.giphy.com/media/JIX9t2j0ZTN9S/200.gif" />
          </Col>
        </Row>
        <Search handleChange={e => this.handleChange(e)} handleSearch={e => this.handleSearch(e)} />
        { this.state.result ? <Result result={this.state.result} /> : null }
      </section>
    );
  }
}

export default Home;
