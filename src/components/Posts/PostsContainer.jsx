import {connect} from "react-redux";
import Posts from "./Posts";

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        currentPage: state.paginationList.currentPage,
    }
}

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
