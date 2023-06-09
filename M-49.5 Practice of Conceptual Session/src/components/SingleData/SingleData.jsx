import React from 'react';

const SingleData = (props) => {
    const {name, image, features, published_in} = props.data;
    console.log('hello');
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image}alt="ai" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                            {name}
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleData;