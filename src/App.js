import './App.scss';
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./components/Homepage/HomePage";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import WorksContainer from "./components/Works/WorksContainer";
import CreateArticleContainer from "./components/Article/CreateArticleContainer";
import ArticleContainer from "./components/Article/ArticleContainer";
import PostTest2 from "./components/Posts/PostTest2";

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
                        <Route exact path='/posts' render={ () => <PostTest2 /> } />
                        <Route exact path='/article' render={ () => <ArticleContainer /> } />
                        <Route exact path='/create_article' render={ () => <CreateArticleContainer /> } />
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
