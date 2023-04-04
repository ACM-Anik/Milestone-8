import React from 'react';
import { addToDB, removeFromDB } from '../../Utilities/FakeDB';
import './Cosmetic.css';
const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) =>{
        addToDB(id);
    }

    const removeFromCart = id => {
        removeFromDB(id);
    }

/*create event handler with parameters by creating a function extra:-- */
    const addToCartWithParams = () => addToCart(id);

    return (
        <div className='product'>
            <h3>Buy this: {name}</h3>
            <p>Only for: $ {price}</p>
            <p><small>It has ID: {id}</small></p>

            {/* main:-- */}
            <button onClick={addToCartWithParams}>Add To Cart</button>

            {/* shortcut:--*/}
            {/* <button onClick={() => addToCart(id)}>Add To Cart 2</button> */}

            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;