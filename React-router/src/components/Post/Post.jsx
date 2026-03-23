import React from 'react';
import { NavLink, useNavigate } from 'react-router';

const Post = ({post}) => {
    const navigate = useNavigate();
    const handleRedirect = () =>{
        navigate(`/posts/${post.id}`)
    }
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <NavLink to={`/posts/${post.id}`}>ShowPostDetails</NavLink>
            <button onClick={handleRedirect}>Details of:{post.id}</button>
        </div>
    );
};

export default Post;