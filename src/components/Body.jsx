import React from 'react';
import AddPost from "./add-post";
import Stories from "./Stories";
import Posts from "./Posts";
import Pagination from "./Pagination";

const Body = (props) => {
    if (props.page == "home") {
        return (
            <div>
                <Stories />
                <AddPost />
                <Posts />
                <Pagination />
            </div>
        )
    }
}

export default Body;