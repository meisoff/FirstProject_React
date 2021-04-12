import React from 'react';
import ArticleItem from "./ArticleItem";
import { Route } from "react-router-dom";

const Article = (props) => {

    let articleElement =
        props.posts.map(element => {
            return (
                <Route exact path={element.link} render={() => <ArticleItem element={element}/>}/>
            )
        })

    return (
        <div>
            {articleElement}
        </div>
    )
}

export default Article;