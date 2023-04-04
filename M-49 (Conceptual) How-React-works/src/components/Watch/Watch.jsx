import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const IncreaseSteps = () => {
        const newSteps = steps + 1;
        setSteps(newSteps);
    }

    useEffect( () => {
        console.log('hello', steps);
    }, [steps])

    return (
        <div style={{border: '2px solid red', margin: '20px', padding: '15px'}}> 
            <h1>Hi, This is my Watch !</h1>
            <p>Steps: {steps}</p>
            <button onClick={IncreaseSteps}>De Dour...</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;