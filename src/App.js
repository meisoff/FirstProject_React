import './App.scss';
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./components/Homepage/HomePage";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import PostTest from "./components/Posts/PostTest";
import WorksContainer from "./components/Works/WorksContainer";
import Article from "./components/Article/Article";

function App() {

    return (
        <BrowserRouter>
            <div className="page" id="page">
                <Header/>
                <Sidebar/>

                <main className="main">
                    <div className="container">
                        <Route path='/#' render={ () => <HomePage /> } />
                        <Route path='//' render={ () => <HomePage /> } />
                        <Route path='/works' render={ () => <WorksContainer /> } />
                        <Route path='/profile' component={Profile} />
                        <Route path='/posts' component={PostTest} />
                        <Route exact path='/article' component={Article} />
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
