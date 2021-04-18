import {combineReducers, createStore} from "redux";
import worksListReducer from "./reducers/worksListReducer";
import postsReducer from "./reducers/postsReducer";
import newPostDescriptionReducer from "./reducers/newPostDescriptionReducer";
import paginationListReducer from "./reducers/paginationListReducer";
import createArticleReducer from "./reducers/createArticleReducer";
import authUserReducer from "./reducers/authUserReducer";
import userReducer from "./reducers/userReducer";


let reducers = combineReducers({
    posts: postsReducer,
    worksList: worksListReducer,
    newPostDescription: newPostDescriptionReducer,
    paginationList: paginationListReducer,
    createArticle: createArticleReducer,
    auth: authUserReducer,
    usersFirstInfo: userReducer,
})

let store = createStore(reducers);

export default store;
