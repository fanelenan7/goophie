import React from 'react';
import { Button, Row, Col } from 'react-materialize'

const NotFound = () => (
  <section className="notfound container">
    <p>This is not the page you are looking for</p>
    <Row>
      <Col>
        <img src="https://media.giphy.com/media/26tPbfJWy9bWONi0w/giphy.gif" alt="" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Button>Go Back</Button>
      </Col>
    </Row>
  </section>
);

export default NotFound;
