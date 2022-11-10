import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
   const {name} = useLoaderData();
    
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Details;