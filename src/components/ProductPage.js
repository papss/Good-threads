import React, { Component } from 'react';
import                           './stylesheets/App.css';

class ProductPage extends Component {
  render() {
    return (
      <div className="product-page-container">
        <div className="product-section img-section">
          {/* image prop goes here */}
        </div>
        <div className="product-section detail-section">
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
              <h3 className="options-header"> Sizes: </h3>
              <div className="product-options">
                <div className="options-box"> S </div>
                <div className="options-box"> M </div>
                <div className="options-box"> L </div>
                <div className="options-box"> XL </div>
              </div>
            </div>
            <div className="product-info color">
              <h3 className="options-header"> Colors: </h3>
              <div className="product-options">
                <div className="options-box white"> { /* white */ } </div>
                <div className="options-box black"> { /* black */ } </div>
                <div className="options-box red"> { /* red */ } </div>
                <div className="options-box blue"> { /* blue */ } </div>
              </div>
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
