import store from "./state";

const ADD_POST = 'ADD-POST';

const postsReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let fullDate = new Date();

            let date = function (date) {
                if (date < 10) {
                    return '0' + date;
                } else {
                    return date;
                }
            }

            let newPost = {
                link: "/posts/12",

                content: {
                    description: action.description,
                },

                footer: {
                    date: date(fullDate.getDate()) + '.' + date(fullDate.getMonth()) + '.' + fullDate.getFullYear(),
                    dateTime: date(fullDate.getDate()) + '-' + date(fullDate.getMonth()) + '-' + fullDate.getFullYear() + ' ' + fullDate.getHours() + ':' + fullDate.getMinutes()
                }
            }

            state.unshift(newPost);
            return state;
        default:
            return state;
    }
}

export const addPostCreate = () => {
    return { type: ADD_POST, description: store.getState().newPostDescription }
}

export default postsReducer;