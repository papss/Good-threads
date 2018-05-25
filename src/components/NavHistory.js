import React, { Component } from 'react';
import                           './stylesheets/App.css';

class NavHistory extends Component {
  render() {
    return (
      <div className="nav-history">
        <div className='nav-history-link'>
          <h3> <a href=''> Products </a> </h3>
        </div>
        <div className="nav-history-link">
          {/* next page up goes here */}
        </div>
      </div>
    );
  }
}

export default NavHistory;
