import React, { Component } from 'react';
import { products }         from './json/products.json';
import                           './stylesheets/App.css';


class ProductIndex extends Component {
  render() {
    return (
      <div className="product-index">

        <div className="index-container">

          {
            products.map(function(product) {
              return    <div className="index-product">
                          <div className="index-img">
                            {/* product thumbnail image goes here */}
                          </div>
                          <div className="index-details">
                            <h3> <a href=""> {product.productName} </a> </h3>
                            <h4> {product.productPrice} </h4>
                          </div>
                        </div>
            })
          }

        </div>

      </div>
    );
  }
}

export default ProductIndex;
