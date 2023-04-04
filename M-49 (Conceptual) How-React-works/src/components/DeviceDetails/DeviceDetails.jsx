import React from 'react';

const DeviceDetails = (props) => {
    return (
        <div>
            <h4>Information about details:</h4>
            <p>It's Price: {props.price}</p>
        </div>
    );
};

export default DeviceDetails;