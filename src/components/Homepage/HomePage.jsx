import React from 'react';
import Stories from "../Stories/Stories";
import AddPostContainer from "../Posts/AddPostContainer";
import PostsContainer from "../Posts/PostsContainer";
import PaginationContainer from "../Pagination/PaginationContainer";


const HomePage = () => {

    return (
        <div>
            <Stories/>
            <AddPostContainer />
            <PostsContainer />
            <PaginationContainer />
        </div>
    )
}

export default HomePage;