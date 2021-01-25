import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="container">
            <h1>CreatePost</h1>
            <PostCreate />
            <hr />
            <h1>Posts</h1>
            <PostList />
        </div>
    );
};