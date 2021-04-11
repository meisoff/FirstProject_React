import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class CreateArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
        this.titleElement = React.createRef();
        this.descriptionElement = React.createRef();
        this.textElement = React.createRef();
    }

    onEditorStateChange = () => {
        let text = this.titleElement.current.value;
        this.props.onEditorStateChanged(text);
    };

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
                        <textarea value={this.props.newTitleState} ref={this.titleElement} onChange={this.onTitleStateChange} className="add-post__textarea" name="post-text" placeholder="Заголовок" maxlength="50" data-autoresize></textarea>
                    </div>
                </div>
                <div className="createArticle__description">
                    <div className="add-post__form">
                        <textarea value={this.props.newDescriptionState} ref={this.descriptionElement} onChange={this.onDescriptionStateChange} className="add-post__textarea" name="post-text" placeholder="Краткое описание" maxlength="200" data-autoresize></textarea>
                    </div>
                </div>

                <Editor
                    editorClassName = "createArticle__editor"
                    toolbarClassName = "createArticle__toolbar"
                    onEditorStateChange={this.onEditorStateChange}
                    placeholder='Напишите что-нибудь...'
                    value={this.props.newEditorState}
                    ref={this.textElement}
                    onChange={this.onEditorStateChange}
                />

                <button onClick={this.onAddArticle} className="btn btn--small btn--blue btn--rounded btn-pos--right">Опубликовать</button>
            </div>
        )
    }
}


export default CreateArticle;