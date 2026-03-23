import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PosteDetails = () => {
    const cardDetails = useLoaderData()
    const navigate = useNavigate()
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h1>Post details here...</h1>
            <h1>{cardDetails.title}</h1>
            <p>{cardDetails.body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PosteDetails;