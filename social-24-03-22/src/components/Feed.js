import React from 'react';
import Post from './Post';

function Feed({post}){
    const feed = post.map((post, index)=>{
        return (<Post key={index} {...post} />)
    });
    
    
    return <>{feed}</>;
}

export default Feed;