import {combineReducers, createStore} from "redux";
import worksListReducer from "./reducers/worksListReducer";
import postsReducer from "./reducers/postsReducer";
import newPostDescriptionReducer from "./reducers/newPostDescriptionReducer";

let reducers = combineReducers({
    posts: postsReducer,
    worksList: worksListReducer,
    newPostDescription: newPostDescriptionReducer
})

let store = createStore(reducers);

export default store;
