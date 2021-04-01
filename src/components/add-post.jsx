import React from "react";

const AddPost = () => {
    return (
        <div className="add-post">
            <form className="add-post__form" action="/" method="POST">
                <textarea className="add-post__textarea" name="post-text" placeholder="Напишите что-нибудь" data-autoresize></textarea>
                <div className="add-post__form-actions">
                    <label className="add-post-file" htmlFor="add-post-file">
                        <input type="file" id="add-post-file" />
                    </label>
                    <button className="add-post__send" type="submit">
                        Отправить
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddPost;