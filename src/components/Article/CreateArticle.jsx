import React, {Component, createRef} from 'react';
import 'draft-js';
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


class CreateArticle extends Component {
    constructor(props) {
        super(props);
        this.titleElement = createRef();
        this.descriptionElement = createRef();
        this.textElement = createRef();
    }

    onTitleStateChange = () => {
        let text = this.titleElement.current.value;
        this.props.onTitleStateChange(text);
    }

    onDescriptionStateChange = () => {
        let text = this.descriptionElement.current.value;
        this.props.onDescriptionStateChange(text);
    }

    onAddArticle = () => {
        this.props.onAddArticle();
    }

    render() {
        return (

            <div>
                <h1 className="page__title">Создание статьи</h1>

                <div className="createArticle__title">
                    <div className="add-post__form">
                        <textarea value={this.props.newTitleState} ref={this.titleElement}
                                  onChange={this.onTitleStateChange} className="add-post__textarea" name="post-text"
                                  placeholder="Заголовок" minlength="10" maxlength="50" data-autoresize></textarea>
                    </div>
                </div>
                <div className="createArticle__description">
                    <div className="add-post__form">
                        <textarea value={this.props.newDescriptionState} ref={this.descriptionElement}
                                  onChange={this.onDescriptionStateChange} className="add-post__textarea"
                                  name="post-text" placeholder="Краткое описание" minlength="100" maxlength="200"
                                  data-autoresize></textarea>
                    </div>
                </div>

                <Editor
                    editorState={this.props.newEditorState}
                    editorClassName="createArticle__editor"
                    toolbarClassName="createArticle__toolbar"
                    placeholder='Напишите что-нибудь...'
                    onEditorStateChange={this.props.onEditorStateChanged}
                />

                <button onClick={this.onAddArticle}
                        className="btn btn--small btn--blue btn--rounded btn-pos--right">Опубликовать
                </button>
            </div>
        )
    }
}


export default CreateArticle;