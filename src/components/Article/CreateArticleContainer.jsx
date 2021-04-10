import React from 'react';
import {connect} from "react-redux";
import CreateArticle from "./CreateArticle";

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const CreateArticleContainer = connect(mapStateToProps, mapDispatchToProps)(CreateArticle);

export default CreateArticleContainer;