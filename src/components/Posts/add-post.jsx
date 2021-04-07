import React from "react";

const AddPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.onAddPost();
    }

    let newPostChange = () => {
        let text = newPostElement.current.value;
        props.onChangePost(text)
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