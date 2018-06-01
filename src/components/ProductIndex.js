import React, { Component } from 'react';
import { products }         from './json/products.json';

class ProductIndex extends Component {

  render() {
    return (
      <div className="product-index">

        <div className="index-container">

          {
            products.map(function(product) {

              return    <div className="index-product" key={product.id}>
                          <div className="index-img">
                            {/* product thumbnail image goes here */}
                          </div>
                          <div className="index-details">
                            <h3> <a href=""> {product.name} </a> </h3>
                            <h4> {product.price} </h4>
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
