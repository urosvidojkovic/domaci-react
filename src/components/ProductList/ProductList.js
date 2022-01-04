import React from 'react';
import Product from '../Product/Product';
import './ProductList.css'

export default function ProductList(props) {
    const {products} = props;

    return (
        <div className='product-list' >
            <h1>Products</h1>
            {products.map((product) => (
                <Product key={product.id} product={product}></Product>
            ))}
        </div>
    )
}