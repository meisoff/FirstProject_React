import {connect} from "react-redux";
import CreateArticle from "./CreateArticle";
import {compose} from "redux";
import {
    closeWindowUrl,
    onAddArticle, onAddWindowUrl, onClickButton,
    onDescriptionStateChange,
    onEditorStateChanged,
    onTitleStateChange, updateUrlState, uploadFile
} from "../../redux/reducers/createArticleReducer";
import {updateTotalPostCount} from "../../redux/reducers/paginationListReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        categoryState: state.createArticle.category,
        newEditorState: state.createArticle.text,
        newTitleState: state.createArticle.title,
        newDescriptionState: state.createArticle.description,
        newInputUrlState: state.createArticle.image,
        isInputUrlOpen: state.createArticle.isInputUrlOpen,
    }
}

export default compose(connect(mapStateToProps, {onEditorStateChanged, onTitleStateChange, onDescriptionStateChange, onAddArticle, onClickButton, uploadFile, onAddWindowUrl, closeWindowUrl, updateUrlState, updateTotalPostCount
}) ,withAuthRedirect)(CreateArticle);