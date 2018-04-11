import React from 'react';
import { Icon, Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';

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
        <Link to="/result" className="waves-effect waves-light btn" onSubmit={e => props.handleSearch(e)}>
          Search
          <Icon right>search</Icon>
        </Link>
      </Col>
    </Row>
  </form>
);

export default Search;
