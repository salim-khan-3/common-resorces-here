import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const details = useLoaderData()
    console.log(details);
    return (
        <div>
            <h1>users details...</h1>
            <h1>{details.name}</h1>
            <p>{details.username}</p>
            <h1>name:{details.email}</h1>
        </div>
    );
};

export default UserDetails;