import React, { useEffect, useState } from 'react';
// import add from '../../Utilities/Calculate';
import { add, getTotal } from '../../Utilities/Calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
/**
 1. Hardcoded api:
 */
    // const cosmetics = [
    //     {id: 1, name: 'Alta', price:100},
    //     {id: 2, name: 'Palish', price:200},
    //     {id: 3, name: 'Balish', price:300},
    //     {id: 4, name: 'Nalish', price:400},
    //     {id: 5, name: 'Malish', price:500},
    // ];


/*
 2. Random data generate from JSON.Generator:
 */
    // const cosmetics = [
    //     {
    //       "id": "641ed5573146f001e5e2ff2a",
    //       "price": 34,
    //       "name": "Mcdonald Fuller"
    //     },
    //     {
    //       "id": "641ed557dde9b324959538f4",
    //       "price": 30,
    //       "name": "Alexander Atkinson"
    //     },
    //     {
    //       "id": "641ed5578ec94963c3ab16f5",
    //       "price": 36,
    //       "name": "Nixon Wade"
    //     },
    //     {
    //       "id": "641ed557e291bb49578197e8",
    //       "price": 31,
    //       "name": "Wiley Cohen"
    //     },
    //     {
    //       "id": "641ed557728902c5acfc4457",
    //       "price": 24,
    //       "name": "Lindsey Battle"
    //     }
    //   ]


/**
 3. make a file data.json in public file to fetch data
 */
    const [cosmetics, setCosmetics] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setCosmetics(data))
    }, []);

    const totalSum = getTotal(cosmetics);


// get and send function data to display:
    const first = 55;
    const second = 66;
    const total = add(first, second)

    return (
        <div style={{border:'2px solid green', margin:'20px', borderRadius:'10px'}}>

            <h1>Welcome to my Cosmetics Store</h1>
            <p>Money needed from reduce: {totalSum}</p>
            <p>Total: {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic    
                    cosmetic={cosmetic} 
                    key={cosmetic.id}></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;