import './App.scss';
import HeaderContainer from "./components/Header/HeaderContainer"
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./components/Homepage/HomePage";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import WorksContainer from "./components/Works/WorksContainer";
import CreateArticleContainer from "./components/Article/CreateArticleContainer";
import ArticleContainer from "./components/Article/ArticleContainer";
import React from "react";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import SignInContainer from "./components/SignIn/SignInContainer";
import SocialContainer from "./components/Social/SocialContainer";
import ProfileUserContainer from "./components/Profile/ProfileUserContainer";
import FollowingListContainer from "./components/Social/FollowingListContainer";

function App() {

    return (
        <BrowserRouter>
            <div className="page" id="page">
                <HeaderContainer/>
                <Sidebar/>

                <main className="main">
                    <div className="container">
                        <Route path='/#' render={ () => <HomePage /> } />
                        <Route path='//' render={ () => <HomePage /> } />
                        <Route path='/works' render={ () => <WorksContainer /> } />
                        <Route path='/profile' component={Profile} />
                        <Route path='/posts' render={ () => <ArticleContainer /> } />
                        <Route exact path='/create_article' render={ () => <CreateArticleContainer /> } />
                        <Route path='/signup' render={ () => <SignUpContainer />} />
                        <Route path='/signin' render={ () => <SignInContainer />} />
                        <Route path='/social' render={ () => <SocialContainer />} />
                        <Route path='/profile_user' render={ () => <ProfileUserContainer />} />
                        <Route path='/following' render={ () => <FollowingListContainer />} />
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
