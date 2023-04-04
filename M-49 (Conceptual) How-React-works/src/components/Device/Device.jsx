import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    // console.log(props);
    return (
        <div>
            <h2>I have a Device: {props.name}</h2>
            <DeviceDetails price={props.price}></DeviceDetails>
        </div>
    );
};

export default Device;