import React from 'react';
import { useMutation } from "@apollo/client";
import { LIKE } from '../../graphQL/post/mutation';


export default function Post({ post }){

    const [ Like ] = useMutation(LIKE);

    const [isIdPost, setIsIdPostt] = React.useState(post.id);

    function handleClick(post){
        var like = post.like + 1;
        Like({ variables: {
            id: post.id, 
            like: like }});
    }

    return (
        <article style={{ "maxWidth" : '700px' }} className='mx-auto my-3 border rounded-1'>
            <div className='text-start m-3'>
                <img src={post.user.image} className="rounded-circle" style={{'maxWidth':40, 'maxHeight':40}} />
                <span className='mx-2 fw-bold'>{post.user.name}</span>
            </div>
            <div>
                <img src={post.image} className="img-fluid" />
            </div>
            <div className='text-start m-3'>
                    <div>
                        <a style={{ cursor : 'pointer' }} onClick={(event) => {handleClick(post)}} >
                            <i className="fa-regular fa-heart fs-4 me-2"></i>
                        </a>
                        <i className="fa-regular fa-comment-dots fs-4"></i>
                    </div>
                <div>
                    <span className='d-block fw-bold'>{ `${post.like} like(s)`}</span>
                    <span className='fw-bold'>{post.user.username}: </span>
                    <span>{post.text}</span>
                </div>
            </div>
        </article>);
}