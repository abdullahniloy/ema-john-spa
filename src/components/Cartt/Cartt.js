import React from 'react';

const Cartt = (props) => {
    //  console.log(props.cart);
    const { name, price, category } = props.cart;
    return (
        <div>
            <h2>Name:{name}</h2>
            <h2>Name:{price}</h2>
            <h2>Name:{category}</h2>
        </div>
    );
};

export default Cartt;