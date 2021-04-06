import './App.scss';
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./components/Homepage/HomePage";
import {BrowserRouter, Route} from "react-router-dom";
import Works from "./components/Works/Works";
import Profile from "./components/Profile/Profile";
import PostTest from "./components/Posts/PostTest";

function App(props) {

    return (
        <BrowserRouter>
            <div className="page" id="page">
                <Header/>
                <Sidebar/>

                <main className="main">
                    <div className="container">
                        <Route path='/#' render={ () => <HomePage dispatch={props.dispatch} newPostDescription={props.appState.newPostDescription} posts={props.appState.posts} /> } />
                        <Route path='//' render={ () => <HomePage dispatch={props.dispatch} newPostDescription={props.appState.newPostDescription} posts={props.appState.posts} /> } />
                        <Route path='/works' render={ () => <Works works={props.appState.worksList} /> } />
                        <Route path='/profile' component={Profile} />
                        <Route path='/posts' component={PostTest} />
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
