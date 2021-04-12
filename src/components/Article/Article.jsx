import React from 'react';
import ArticleItem from "./ArticleItem";
import {Route} from "react-router-dom";

class Article extends React.Component {
    render() {
        return (
            this.props.posts.map(element => {
                return (
                    <Route exact path={element.link} render={() => <ArticleItem content={element.content.html}/>}/>
                )
            })
    )
    }
}

export default Article;