import React from 'react';
import { Row, Col } from 'react-materialize';

const Footer = () => (
  <footer className="page-footer">
    <div className="container">
      <Row className="page__footer__row">
        <Col className="col l6 s12">
          <h5 className="white-text">Powered By GIPHY</h5>
          <p className="white-text">Header image belongs to Carbot</p>
        </Col>
      </Row>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2018 Lena Santana
      </div>
    </div>
  </footer>
);

export default Footer;
