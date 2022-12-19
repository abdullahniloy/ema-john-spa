import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {/* <h1>Products part:{products.length}</h1> */}

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}


                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>This is Cart part</h3>
            </div>
        </div>
    );
};

export default Shop;