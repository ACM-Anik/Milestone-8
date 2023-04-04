import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid purple', margin: '20px'}}>
            <h2>This is dial component</h2>
            <p>Your Steps Count: {props.steps}</p>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;