import store from "../redux-store";
import {EditorState, convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const UPDATE_ARTICLE_TEXT = 'UPDATE_ARTICLE_TEXT';
const UPDATE_ARTICLE_TITLE = 'UPDATE_ARTICLE_TITLE';
const UPDATE_ARTICLE_DESCRIPTION = 'UPDATE_ARTICLE_DESCRIPTION';
const ADD_ARTICLE = 'ADD_ARTICLE';
const UPDATE_ARTICLE_TAG = 'UPDATE_ARTICLE_TAG';
const UPDATE_ARTICLE_URL = 'UPDATE_ARTICLE_URL';
const ADD_ARTICLE_URL = 'ADD_ARTICLE_URL';
const CLOSE_ARTICLE_URL = 'CLOSE_ARTICLE_URL';
const UPLOAD_ARTICLE_FILE = 'UPLOAD_ARTICLE_FILE';

let initialState = {
    image: '',
    title: '',
    description: '',
    text: EditorState.createEmpty(),
    html: '',
    category: '',
    isInputUrlOpen: '',
}

const createArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ARTICLE_TEXT:
            return {...state, text: action.text, html: draftToHtml(convertToRaw(action.text.getCurrentContent()))};
        case UPDATE_ARTICLE_TITLE:
            return {...state, title: action.text};
        case UPDATE_ARTICLE_DESCRIPTION:
            return {...state, description: action.text};
        case UPDATE_ARTICLE_TAG:
            return {...state, category: action.category};
        case UPDATE_ARTICLE_URL:
            return {...state, image: action.url};
        case ADD_ARTICLE_URL:
            return {...state, isInputUrlOpen: false};
        case CLOSE_ARTICLE_URL:
            return {...state, isInputUrlOpen: false, image: ''};
        case UPLOAD_ARTICLE_FILE:
            return {...state, isInputUrlOpen: true};
        case ADD_ARTICLE:
            return initialState;
        default:
            return state;
    }
}

export const onEditorStateChanged = (text) => {
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
        type: UPDATE_ARTICLE_TAG, category
    }
}

export const updateUrlState = (url) => {
    return {
        type: UPDATE_ARTICLE_URL, url
    }
}

export const onAddWindowUrl = () => {
    return {
        type: ADD_ARTICLE_URL
    }
}

export const closeWindowUrl = () => {
    return {
        type: CLOSE_ARTICLE_URL
    }
}

export const uploadFile = () => {
    return {
        type: UPLOAD_ARTICLE_FILE
    }
}

export default createArticleReducer;