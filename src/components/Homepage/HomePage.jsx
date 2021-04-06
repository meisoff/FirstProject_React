import React from 'react';
import AddPost from "../Posts/add-post";
import Stories from "./Stories";
import Posts from "../Posts/Posts";
import Pagination from "../Pagination";

const HomePage = (props) => {

    return (
        <div>
            <Stories/>
            <AddPost dispatch={props.dispatch} newPostDescription={props.newPostDescription} />
            <Posts posts={props.posts} />
            <Pagination/>
        </div>
    )
}

export default HomePage;