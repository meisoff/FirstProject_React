import React from 'react';
import ArticleItem from "./ArticleItem";
import { Route } from "react-router-dom";

const Article = (props) => {
    
    let filteredArticle =
        props.posts.filter(element => {
            if (element.hasOwnProperty('link')) {
                return element;
            }
        })
    
    let articleElement =
        filteredArticle.map(element => {
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