import React from 'react';
import store from "../redux-store";
const UPDATE_ARTICLE_TEXT = 'UPDATE_ARTICLE_TEXT';
const UPDATE_ARTICLE_TITLE = 'UPDATE_ARTICLE_TITLE';
const UPDATE_ARTICLE_DESCRIPTION = 'UPDATE_ARTICLE_DESCRIPTION';
const ADD_ARTICLE = 'ADD_ARTICLE';

let initialState = {
    image: '',
    title: '',
    description: '',
    text: ''
}

const createArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ARTICLE_TEXT:
            return {...state, text: action.text}
        case UPDATE_ARTICLE_TITLE:
            return {...state, title: action.text}
        case UPDATE_ARTICLE_DESCRIPTION:
            return {...state, description: action.text}
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

export default createArticleReducer;