import React from 'react';

const SinglePlayer = (props) => {
    console.log(props.player);
    const { name, picture, price, gender, category} = props.player;
    const handleAddToCart = props.handleAddToCart;

    return (
        <>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="h-[180px]"><img src={picture} alt="footballer" /></figure>
                <div className="card-body px-0">
                    <h2 className="card-title">{name}</h2>
                    <h5>Position: {category}</h5>
                    <p>Price: {price}</p>
                    <p>Gender: {gender}</p>
                </div>
                    <div className="card-actions ">
                        <button onClick={() => handleAddToCart(props.player)} className=" w-full bg-[#FFE0B3] rounded-lg p-2 hover:bg-orange-400">Buy Now</button>
                    </div>
            </div>
        </>
    );
};

export default SinglePlayer;