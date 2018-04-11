import React, { Component } from 'react';
import { Button, Icon, Row, Col } from 'react-materialize'

const Search = () => (
  <section className="search">
    <Row>
      <Col className="col s12 m6 offset-m3">
        <label htmlFor="search">Search for a Gif</label>
        <input placeholder="Supercalifragilisticexpialidocious" id="search" type="text" />
      </Col>
      <Col className="col m6 s12 offset-m5">
        <Button onClick={e => this.props.onSearch(e)} waves='light'>Search<Icon right>search</Icon></Button>
      </Col>
    </Row>
  </section>
);

export default Search;
