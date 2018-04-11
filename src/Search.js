import React from 'react';
import { Button, Icon, Row, Col } from 'react-materialize'

import './Search.css';

const Search = (props) => (
  <form className="search">
    <Row>
      <Col className="col s12 m6 offset-m3">
        <label htmlFor="search">Search for a Gif</label>
        <input
          onChange={e => props.handleChange(e)}
          placeholder="Supercalifragilisticexpialidocious"
          id="search"
          type="text"
        />
      </Col>
      <Col className="col m6 s12 offset-m5">
        <Button onClick={e => props.handleSearch(e)} waves='light'>
          Search
          <Icon right>search</Icon>
        </Button>
      </Col>
    </Row>
  </form>
);

export default Search;
