import React from 'react';
import {connect} from "react-redux";
import AddPost from "./add-post";
import {addPostCreate} from "../../redux/reducers/postsReducer";
import {updateNewPostText} from "../../redux/reducers/newPostDescriptionReducer";

let mapStateToProps = (state) => {
    return {
        newPostDescription: state.newPostDescription
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostCreate());
        },
        onChangePost: (text) => {
            dispatch(updateNewPostText(text))
        }
    }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;