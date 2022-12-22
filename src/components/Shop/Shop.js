import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css';

import Cartt from '../Cartt/Cartt';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>

            <div className="products-container">
                {/* <h1>Products part:{products.length}</h1> */}

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}

                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Selected Items:{cart.length}</p>
                {
                    cart.map(p => <Cartt
                        key={p.id}
                        cart={p}
                    ></Cartt>)
                }
            </div>
        </div>
    );
};

export default Shop;