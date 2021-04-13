import React from 'react';
import {connect} from "react-redux";
import Article from "./Article";

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const ArticleContainer = connect(mapStateToProps)(Article);

export default ArticleContainer;