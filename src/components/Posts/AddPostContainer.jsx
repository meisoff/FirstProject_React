import React from 'react';
import {connect} from "react-redux";
import AddPost from "./add-post";
import {addPostCreate} from "../../redux/reducers/postsReducer";
import {updateNewPostText} from "../../redux/reducers/newPostDescriptionReducer";
import {updateTotalPostCount} from "../../redux/reducers/paginationListReducer";

let mapStateToProps = (state) => {
    return {
        newPostDescription: state.newPostDescription
    }
}

const AddPostContainer = connect(mapStateToProps, {addPostCreate, updateNewPostText, updateTotalPostCount})(AddPost);

export default AddPostContainer;