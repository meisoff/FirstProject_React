import {combineReducers, createStore} from "redux";
import worksListReducer from "./worksListReducer";
import postsReducer from "./postsReducer";
import newPostDescriptionReducer from "./newPostDescriptionReducer";

let reducers = combineReducers({
    posts: postsReducer,
    worksList: worksListReducer,
    newPostDescription: newPostDescriptionReducer
})

let store = createStore(reducers);

export default store;
