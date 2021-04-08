const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = '';

const newPostDescriptionReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return action.postMessage;
        case ADD_POST:
            return '';
        default:
            return state;
    }
}

export const updateNewPostText = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, postMessage: text}
}

export default newPostDescriptionReducer;