import {combineReducers, createStore} from "redux";
import worksListReducer from "./reducers/worksListReducer";
import postsReducer from "./reducers/postsReducer";
import newPostDescriptionReducer from "./reducers/newPostDescriptionReducer";
import paginationListReducer from "./reducers/paginationListReducer";

let reducers = combineReducers({
    posts: postsReducer,
    worksList: worksListReducer,
    newPostDescription: newPostDescriptionReducer,
    paginationList: paginationListReducer
})

let store = createStore(reducers);

export default store;
