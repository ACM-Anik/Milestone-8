import React, { useEffect, useState } from 'react';
import { addToDB, getShoppingCart } from '../../utilities/fakeDB';
import Cart from '../Cart/Cart';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Player.css';

const Player = () => {

    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, [])
    
    useEffect(()=>{
        const storedCart = getShoppingCart();
        // const savedCart = [];

        // for(id in storedCart){
        //     const addedPlayer = players.find(player => player.id === id);
        //     if(addedPlayer){
        //         alert('already exists');
        //     }
        // }
        setCart(storedCart);
    }, [players])


    const handleAddToCart = (player) => {
        const newCart = [...cart, player];

        setCart(newCart);
        addToDB(player.id);
    }


    return (
        <div className="flex justify-between">
            <div>
                <h1 className="text-center text-2xl my-4 font-serif shadow-orange-100 shadow-lg w-64 mx-auto">Player Available</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        players.map(player => <SinglePlayer 
                            player={player} 
                            key={player.id}
                            handleAddToCart={handleAddToCart} 
                        ></SinglePlayer>)
                    }
                </div>
            </div>
            <div className="bg-[#FFE0B3] px-16 ">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Player;