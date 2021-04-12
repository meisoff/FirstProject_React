import React from 'react';
import store from "../redux-store";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const UPDATE_ARTICLE_TEXT = 'UPDATE_ARTICLE_TEXT';
const UPDATE_ARTICLE_TITLE = 'UPDATE_ARTICLE_TITLE';
const UPDATE_ARTICLE_DESCRIPTION = 'UPDATE_ARTICLE_DESCRIPTION';
const ADD_ARTICLE = 'ADD_ARTICLE';
const UPDATE_ARTICLE_TAG = 'UPDATE_ARTICLE_TAG';

let initialState = {
    image: '',
    title: '',
    description: '',
    text: EditorState.createEmpty(),
    html: null,
    category: '',
}

const createArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ARTICLE_TEXT:
            console.log('redux action: ', action.type, action.text.getCurrentContent().getPlainText());
            return {...state, text: action.text, html: draftToHtml(convertToRaw(action.text.getCurrentContent()))}
        case UPDATE_ARTICLE_TITLE:
            return {...state, title: action.text}
        case UPDATE_ARTICLE_DESCRIPTION:
            return {...state, description: action.text}
        case UPDATE_ARTICLE_TAG:
            return {...state, category: action.category}
        case ADD_ARTICLE:
            return initialState;
        default:
            return state;
    }
}

export const onEditorStateChange = (text) => {
    return {type: UPDATE_ARTICLE_TEXT, text: text}
}

export const onTitleStateChange = (text) => {
    return {type: UPDATE_ARTICLE_TITLE, text: text}
}

export const onDescriptionStateChange = (text) => {
    return {type: UPDATE_ARTICLE_DESCRIPTION, text: text}
}

export const onAddArticle = () => {
    return {
        type: ADD_ARTICLE,
        createArticle: store.getState().createArticle
    }
}

export const onClickButton = (category) => {
    return {
        type: UPDATE_ARTICLE_TAG,
        category: category
    }
}

export const uploadFile = (URL) => {

}

export default createArticleReducer;