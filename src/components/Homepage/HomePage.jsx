import React from 'react';
import AddPost from "../Posts/add-post";
import Stories from "./Stories";
import Posts from "../Posts/Posts";
import Pagination from "../Pagination";
import {addPostCreate, clearPost} from "../../redux/postsReducer";
import {updateNewPostText} from "../../redux/newPostDescriptionReducer";


const HomePage = (props) => {

    let onAddPost = () => {
        props.dispatch(addPostCreate());
        clearPost();
    }

    let onChangePost = (text) => {
        props.dispatch(updateNewPostText(text))
    }


    return (
        <div>
            <Stories/>
            <AddPost dispatch={props.dispatch} newPostDescription={props.newPostDescription} onAddPost={onAddPost} onChangePost={onChangePost} />
            <Posts posts={props.posts}/>
            <Pagination/>
        </div>
    )
}

export default HomePage;