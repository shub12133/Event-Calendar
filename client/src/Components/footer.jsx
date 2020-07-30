import React, { Component } from 'react';
import './footer.css';
export default class about extends Component {
  render() {
    return (
      <footer className='w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge'>
        <p className='w3-medium'>
          Powered by{' '}
          <a
            // href='https://github.com/NemanjaKovacevic15'
            target='_blank'
            rel='noopener noreferrer'
          >
            Shubham Sharma
          </a>
        </p>
      </footer>
    );
  }
}
