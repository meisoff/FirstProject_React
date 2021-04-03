import React from 'react';
import AddPost from "./add-post";
import Stories from "./Stories";
import Posts from "./Posts/Posts";
import Pagination from "./Pagination";

const HomePage = () => {
    return (
        <div>
            <Stories/>
            <AddPost/>
            <Posts/>
            <Pagination/>
        </div>
    )

}

export default HomePage;