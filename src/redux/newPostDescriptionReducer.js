const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const newPostDescriptionReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state = action.postMessage;
            return state;
        default:
            return state;
    }
}

export const updateNewPostText = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, postMessage: text}
}

export default newPostDescriptionReducer;