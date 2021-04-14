import React from "react";
import PostItem from "./PostItem";
import {separateFunc} from "../../redux/reducers/postsReducer";


const Posts = (props) => {

    let elementsOnEverPage = separateFunc(props.posts);

    let postElements;

    for (let i = 0; i < elementsOnEverPage.length; i++) {
        if (props.currentPage === i + 1) {
            postElements =
                elementsOnEverPage[i].map(element => {
                    if (element.hasOwnProperty('header')) {
                        return <PostItem key={element.key} header={element.header} link={element.link} content={element.content}
                                         footer={element.footer} category={element.category}/>
                    } else {
                        return <PostItem key={element.key} content={element.content} footer={element.footer}/>
                    }
                });
        }
    }

    return (
        <div>
            {postElements}
        </div>
    )
}


export default Posts;