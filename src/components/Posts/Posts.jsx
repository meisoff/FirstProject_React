import React from "react";
import PostItem from "./PostItem";


const Posts = (props) => {

    let postElements =
        props.posts.map(element => {
            if (element.hasOwnProperty('header')) {
                return <PostItem header={element.header} link={element.link} content={element.content}
                                 footer={element.footer} category={element.category}/>
            } else {
                return <PostItem content={element.content} footer={element.footer}/>
            }
        });

    return (
        <div>
            {postElements}
        </div>
    )
}


export default Posts;