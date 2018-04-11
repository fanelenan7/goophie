import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

class Result extends Component {
  render() {
    const data = this.props.result.map((gif, key) => {
      return <img key={`result-${key}`} src={gif.images.fixed_height.url} alt={gif.title} />
    })
    return (
      <section className="result">
        <div className="container">
          <Row>
            <Col>
              {data}
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default Result;
