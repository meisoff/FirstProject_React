import './App.scss';
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./components/Homepage/HomePage";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import PostTest from "./components/Posts/PostTest";
import WorksContainer from "./components/Works/WorksContainer";
import CreateArticleContainer from "./components/Article/CreateArticleContainer";
import ArticleContainer from "./components/Article/ArticleContainer";

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
                        <Route exact path='/article' component={ArticleContainer} />
                        <Route exact path='/create_article' component={CreateArticleContainer} />
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
