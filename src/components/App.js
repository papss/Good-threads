import React, { Component } from 'react';
import Header               from './Header';
import SiteBody             from './SiteBody';
import                           './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <Header />
        </div>
        <div className="app-body">
          <SiteBody />
        </div>
      </div>
    );
  }
}

export default App;
