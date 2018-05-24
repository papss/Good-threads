import React, { Component } from 'react';
import                           './stylesheets/App.css';

class ProductIndex extends Component {
  render() {
    return (
      <div className="product-index">

        <div className="index-container">

          <div className="index-product">
            <div className="index-img">
              {/* product thumbnail image goes here */}
            </div>
            <div className="index-details">
              <h3> Product Name </h3>
              <h4> $1000.99 </h4>
            </div>
          </div>

          <div className="index-product">
            <div className="index-img">
              {/* product thumbnail image goes here */}
            </div>
            <div className="index-details">
              <h3> Product Name </h3>
              <h4> $1000.99 </h4>
            </div>
          </div>

          <div className="index-product">
            <div className="index-img">
              {/* product thumbnail image goes here */}
            </div>
            <div className="index-details">
              <h3> Product Name </h3>
              <h4> $1000.99 </h4>
            </div>
          </div>

          <div className="index-product">
            <div className="index-img">
              {/* product thumbnail image goes here */}
            </div>
            <div className="index-details">
              <h3> Product Name </h3>
              <h4> $1000.99 </h4>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default ProductIndex;
