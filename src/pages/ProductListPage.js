import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const products = ['car', 'bike', 'motorcycle'];


const ProductListPage = () => {

  const list = products.map(product => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ))

  return (
    <div className='products'>
      <h1>Lista productów</h1>
      <div>
        <ul>
          {list}
        </ul>
      </div>


    </div>


  );
}

export default ProductListPage;
