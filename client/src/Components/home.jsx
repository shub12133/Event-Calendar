import React, { Component } from 'react';

import { Jumbotron, Container } from 'react-bootstrap';

import slika1 from './slika1.png';
import slika2 from './slika2.png';

export default class home extends Component {
  render() {
    return (
      <Container>
        <h2 class='text-center p-3'>What is a event calendar ?</h2>

        <Jumbotron>
          <h1>Event Calendar </h1>
          <p>
          a document, chart, etc., that shows the days, weeks, and months of a year. : a list or schedule of events or activities that occur at different times throughout the year. : a particular system for organizing the days of the year by month.          </p>
          <br />
        </Jumbotron>
        <div class='row text-center p-3'>
          <div class='col-lg-6 col-md-6 col-xs-6 thumb'>
            <img
              class='img-responsive'
              src={slika1}
              style={{ width: '50%' }}
              alt='scheduler'
            />
            <h3>Organization.</h3>
          </div>
          <div class='col-lg-6 col-md-6 col-xs-6 thumb'>
            <img
              class='img-responsive'
              src={slika2}
              style={{ width: '50%' }}
              alt='scheduler2'
            />
            <h3>Clock Respond.</h3>
          </div>
        </div>
      </Container>
    );
  }
}
