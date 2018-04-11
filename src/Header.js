import React from 'react';
import { Row, Col } from 'react-materialize';

import './Header.css';

const Header = () => (
  <header>
    <div className="container app__header">
      <Row>
        <Col>
          <h1>Welcome to Goophie!</h1>
        </Col>
      </Row>
    </div>
  </header>
);

export default Header;
