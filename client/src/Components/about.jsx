import React, { Component } from 'react';
import './about.css';
import { Container, Row, Col } from 'reactstrap';

import unipu from './unipu.png';

export default class about extends Component {
  render() {
    return (
      <div>
        <section id='two' className='wrapper style3'>
          <div className='inner'>
            <header className='align-center text-center'>
              <p> MongoDB(NoSQL), React.js, Node.js, Redux</p>

              <h3>Shubham sharma</h3>
            </header>
          </div>
        </section>

        <section id='two' className='wrapper style3'>
          <Row>
            <Col xs='auto'>
              <div className='inner'>
                <header className='align-center text-center'>
                  <p>Used tools is MongoDB(NoSQL), React.js, Node.js, Redux</p>
                  <p>The project is for testing purpose.</p>
                </header>
              </div>
            </Col>
          </Row>
        </section>

        <Container>
          <Row>
            <Col xs={6} md={4}></Col>
            <Col xs={6} md={4}>
              <div className='image mt-5'>
                {/* <img src={unipu} alt='Pic 01' width='495' height='170' /> */}
              </div>
              <footer></footer>
            </Col>
            <Col xs={6} md={4}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
