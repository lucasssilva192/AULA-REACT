import React from 'react';
import Layout from '../components/shared/Layouts';
import { getPost } from '../data';
import Post from '../components/feed/Post';

export default function FeedPage(){
    const posts = [getPost(), getPost(), getPost()];

    return (
        <Layout>
            <div className="row">
                <div className="col-10 mx-auto">
                    { posts.map((post) => <Post key={post.id} post={post} />) }
                </div>
            </div>
        </Layout>
    );
    
        
}