import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Cards = () => {
    const [allData, setAllData] = useState([])

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res => res.json())
            .then(data => setAllData(data.data.tools))
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-2 my-6 ">
                {
                    allData.slice(0,  6).map((data) => (console.log(data), <SingleData data={data} key={data.id}></SingleData>))
                }
            </div>
        </>
    );
};

export default Cards;