import React from 'react';
import Stories from "../Stories/Stories";
import Pagination from "../Pagination/Pagination";
import AddPostContainer from "../Posts/AddPostContainer";
import PostsContainer from "../Posts/PostsContainer";


const HomePage = () => {

    return (
        <div>
            <Stories/>
            <AddPostContainer />
            <PostsContainer />
            <Pagination/>
        </div>
    )
}

export default HomePage;