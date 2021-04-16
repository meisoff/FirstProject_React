import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import {Provider} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
const App = React.lazy(() => import("./App"));


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense fallback={<Preloader />}>
                <App/>
            </Suspense>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
