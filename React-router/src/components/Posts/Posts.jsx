import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const postData = useLoaderData()
    console.log(postData);
    return (
        <div>
            <h1>hello post</h1>
            <div>
                {
                    postData.map(post=><Post post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;