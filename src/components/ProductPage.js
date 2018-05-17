import React, { Component } from 'react';
import                           './stylesheets/App.css';

class ProductPage extends Component {
  render() {
    return (
      <div className="product-page-container">
        <div className="product-section img">
          {/* image prop goes here */}
        </div>
        <div className="product-section details">
          <div className="product-header">
            <h2> Product Name </h2>
            <h3> $1000.99 </h3>
          </div>
          <div className="product-info-container">
            <div className="product-info description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam leo,
                ullamcorper in ornare sit amet, euismod eget magna. Cras id enim sed mauris
                volutpat feugiat. Duis facilisis ante lectus, sit amet convallis ex convallis
                non. Nunc sem nisi, finibus sit amet ornare id, lacinia sed nibh.
              </p>
            </div>
            <div className="product-info size">
                {/* size component goes here */}
                product size component
            </div>
            <div className="product-info color">
                {/* color component goes here */}
                product color
            </div>
            <div className="product-info checkout">
              <button className="btn product-btn"> Add to Cart. </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
