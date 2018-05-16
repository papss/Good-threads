import React, { Component } from 'react';
import Header               from './Header';
import Main                 from './Main';
import                           './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <Header />
        </div>
        <div className="app-body">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
