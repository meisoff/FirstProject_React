import './App.scss';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import {BrowserRouter, Route} from "react-router-dom";
import Works from "./components/Works/Works";
import Profile from "./components/Profile";
import PostTest from "./components/PostTest";

function App() {
    return (
        <BrowserRouter>
            <div className="page" id="page">
                <Header/>
                <Sidebar/>

                <main className="main">
                    <div className="container">
                        <Route path='/#' component={HomePage} />
                        <Route path='//' component={HomePage} />
                        <Route path='/works' component={Works} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/posts' component={PostTest} />
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
