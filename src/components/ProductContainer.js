import React, { Component } from 'react';
// import NavHistory           from './NavHistory';
import ProductIndex         from './ProductIndex';
// import ProductPage          from './ProductPage';

import { products }         from './json/products.json';
import                           './stylesheets/App.css';


class ProductContainer extends Component {

  constructor() {
    super();
    this.state = { products: [] }
  }

  componentDidMount() {
    fetch('./json/products.json')
      .then(response => response.json())
      .then(products => this.setState({ products }))
  }

  render() {
    return (
      <div className="main-container">
        <div className="target-container">
          <ProductIndex data={this.state.products} />
        </div>
      </div>
    );
  }
}

export default ProductContainer;
