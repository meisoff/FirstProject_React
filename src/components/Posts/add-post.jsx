import React from "react";
import {addPostCreate} from "../../redux/postsReducer";
import {updateNewPostText} from "../../redux/newPostDescriptionReducer";

const AddPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostCreate());
    }

    let newPostChange = () => {
        let text = newPostElement.current.value;

        props.dispatch(updateNewPostText(text));
    }

    return (
        <div className="add-post">
            <div className="add-post__form">
                <textarea onChange={newPostChange} ref={newPostElement} value={props.newPostDescription} className="add-post__textarea" name="post-text" placeholder="Напишите что-нибудь" data-autoresize></textarea>
                <div className="add-post__form-actions">
                    <label className="add-post-file" htmlFor="add-post-file">
                        <input type="file" id="add-post-file" />
                    </label>
                    <button onClick={addPost} className="add-post__send">
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddPost;