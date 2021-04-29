import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import worksListReducer from "./reducers/worksListReducer";
import postsReducer from "./reducers/postsReducer";
import newPostDescriptionReducer from "./reducers/newPostDescriptionReducer";
import paginationListReducer from "./reducers/paginationListReducer";
import createArticleReducer from "./reducers/createArticleReducer";
import authUserReducer from "./reducers/authUserReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
import isFetchingReducer from "./reducers/isFetchingReducer";


let reducers = combineReducers({
    posts: postsReducer,
    worksList: worksListReducer,
    newPostDescription: newPostDescriptionReducer,
    paginationList: paginationListReducer,
    createArticle: createArticleReducer,
    auth: authUserReducer,
    usersInfo: userReducer,
    isFetching: isFetchingReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
