import React from 'react';
import {connect} from "react-redux";
import CreateArticle from "./CreateArticle";
import {
    closeWindowUrl,
    onAddArticle, onAddWindowUrl, onClickButton,
    onDescriptionStateChange,
    onEditorStateChanged,
    onTitleStateChange, updateUrlState, uploadFile
} from "../../redux/reducers/createArticleReducer";
import {updateTotalPostCount} from "../../redux/reducers/paginationListReducer";

const mapStateToProps = (state) => {
    return {
        categoryState: state.createArticle.category,
        newEditorState: state.createArticle.text,
        newTitleState: state.createArticle.title,
        newDescriptionState: state.createArticle.description,
        newInputUrlState: state.createArticle.image,
        isInputUrlOpen: state.createArticle.isInputUrlOpen,
    }
}

const CreateArticleContainer = connect(mapStateToProps, {onEditorStateChanged, onTitleStateChange, onDescriptionStateChange, onAddArticle, onClickButton, uploadFile, onAddWindowUrl, closeWindowUrl, updateUrlState, updateTotalPostCount
})(CreateArticle);

export default CreateArticleContainer;