import React, { Component } from 'react';
import NavHistory           from './NavHistory';
import ProductPage          from './ProductPage';
import                           './stylesheets/App.css';


class SiteBody extends Component {
  render() {
    return (
      <div className="main-container">
        <div>
          <NavHistory />
        </div>
        <div className="target-container">
          {/* either the product index or individual product page should render here. */}
          {/* switch via state change? */}
          <ProductPage />
        </div>
      </div>
    );
  }
}

export default SiteBody;