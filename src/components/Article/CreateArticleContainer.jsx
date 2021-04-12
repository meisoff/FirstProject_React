import React from 'react';
import {connect} from "react-redux";
import CreateArticle from "./CreateArticle";
import {
    onAddArticle, onClickButton,
    onDescriptionStateChange,
    onEditorStateChange,
    onTitleStateChange, uploadFile
} from "../../redux/reducers/createArticleReducer";

const mapStateToProps = (state) => {
    return {
        categoryState: state.createArticle.category,
        newEditorState: state.createArticle.text,
        newTitleState: state.createArticle.title,
        newDescriptionState: state.createArticle.description
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEditorStateChanged: (text) => {
            dispatch(onEditorStateChange(text));
        },
        onTitleStateChange: (text) => {
            dispatch(onTitleStateChange(text));
        },
        onDescriptionStateChange: (text) => {
            dispatch(onDescriptionStateChange(text));
        },
        onAddArticle: () => {
            dispatch(onAddArticle())
        },
        onClickButton: (id) => {
            dispatch(onClickButton(id))
        },
        uploadFile: (URL) => {
            dispatch(uploadFile(URL))
        }
    }
}

const CreateArticleContainer = connect(mapStateToProps, mapDispatchToProps)(CreateArticle);

export default CreateArticleContainer;