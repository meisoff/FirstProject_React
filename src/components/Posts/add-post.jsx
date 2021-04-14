import React from "react";
import {NavLink} from "react-router-dom";

const AddPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPostCreate();
        props.updateTotalPostCount();
    }

    let newPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }
    return (
        <div className="add-post">
            <div className="add-post__form">
                <textarea onChange={newPostChange} ref={newPostElement} value={props.newPostDescription}
                          className="add-post__textarea" name="post-text" placeholder="Напишите что-нибудь" />
                <div className="add-post__form-actions">
                    <NavLink to="/create_article">
                        <div className="add-post-file"/>
                    </NavLink>
                    <button onClick={addPost} className="add-post__send">
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddPost;