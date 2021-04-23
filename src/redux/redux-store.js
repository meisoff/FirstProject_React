import {applyMiddleware, combineReducers, createStore} from "redux";
import worksListReducer from "./reducers/worksListReducer";
import postsReducer from "./reducers/postsReducer";
import newPostDescriptionReducer from "./reducers/newPostDescriptionReducer";
import paginationListReducer from "./reducers/paginationListReducer";
import createArticleReducer from "./reducers/createArticleReducer";
import authUserReducer from "./reducers/authUserReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";


let reducers = combineReducers({
    posts: postsReducer,
    worksList: worksListReducer,
    newPostDescription: newPostDescriptionReducer,
    paginationList: paginationListReducer,
    createArticle: createArticleReducer,
    auth: authUserReducer,
    usersInfo: userReducer,
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
