import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {updateNewPostText} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}