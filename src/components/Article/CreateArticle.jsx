import React, {Component, createRef} from 'react';
import 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import InputUrlWindow from "../common/InputUrlWindow/InputUrlWindow";


class CreateArticle extends Component {
    constructor(props) {
        super(props);
        this.titleElement = createRef();
        this.descriptionElement = createRef();

        this.state = {
            id: {
                site: 'Создание сайтов',
                marketing: 'Интернет-маркетинг',
                video: 'Продвижение видео'
            }
        }
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

    publishArticle = () => {
        if (this.props.categoryState !== '' && this.props.newTitleState !== '' && this.props.newDescriptionState !== '' && this.props.newInputUrlState !== '') {
            return (
                <button onClick={() => this.onAddArticle()}
                        className="btn btn--small btn--blue btn--rounded btn-pos--right">Опубликовать
                </button>
            )
        } else {
            return (
                <button onClick={() => this.onAddArticle()}
                        className="btn btn--small btn--disabled btn--rounded btn-pos--right" disabled>Опубликовать
                </button>
            )
        }
    }

    cleverTags = () => {

        switch (this.props.categoryState) {
            case this.state.id.site:
                return (
                    <div className="createArticle__category-tagsParent">
                        <div className="tags--active" onClick={() => this.props.onClickButton(this.state.id.site)}>
                            <p>Создание сайта</p></div>
                        <div className="createArticle__category-tags"
                             onClick={() => this.props.onClickButton(this.state.id.marketing)}><p>Интернет-маркетинг</p>
                        </div>
                        <div className="createArticle__category-tags"
                             onClick={() => this.props.onClickButton(this.state.id.video)}><p>Продвижение видео</p>
                        </div>
                    </div>
                )
            case this.state.id.marketing:
                return (
                    <div className="createArticle__category-tagsParent">
                        <div className="createArticle__category-tags"
                             onClick={() => this.props.onClickButton(this.state.id.site)}><p>Создание сайта</p></div>
                        <div className="tags--active" onClick={() => this.props.onClickButton(this.state.id.marketing)}>
                            <p>Интернет-маркетинг</p></div>
                        <div className="createArticle__category-tags"
                             onClick={() => this.props.onClickButton(this.state.id.video)}><p>Продвижение видео</p>
                        </div>
                    </div>
                )
            case this.state.id.video:
                return (
                    <div className="createArticle__category-tagsParent">
                        <div className="createArticle__category-tags"
                             onClick={() => this.props.onClickButton(this.state.id.site)}><p>Создание сайта</p></div>
                        <div className="createArticle__category-tags"
                             onClick={() => this.props.onClickButton(this.state.id.marketing)}><p>Интернет-маркетинг</p>
                        </div>
                        <div className="tags--active" onClick={() => this.props.onClickButton(this.state.id.video)}>
                            <p>Продвижение видео</p></div>
                    </div>
                )
            default:
                return (
                    <div className="createArticle__category-tagsParent">
                        <div className="createArticle__category-tags"
                             onClick={() => this.props.onClickButton(this.state.id.site)}><p>Создание сайта</p></div>
                        <div className="createArticle__category-tags"
                             onClick={() => this.props.onClickButton(this.state.id.marketing)}><p>Интернет-маркетинг</p>
                        </div>
                        <div className="createArticle__category-tags"
                             onClick={() => this.props.onClickButton(this.state.id.video)}><p>Продвижение видео</p>
                        </div>
                    </div>
                )
        }
    }

    uploadFile = () => {
        this.props.uploadFile();
        this.props.updateTotalPostCount();
    }


    uploadFileButton = () => {
        if (this.props.newInputUrlState === '') {
            return (
                <div className="createArticle__preview-tags" onClick={() => this.uploadFile()}><p>Загрузить</p>
                </div>)
        } else {
            return (<div className="tags--active" onClick={() => this.uploadFile()}><p>Изменить</p></div>)
        }
    }

    render() {
        return (

            <div>
                <h1 className="page__title">Создание статьи</h1>
                <div className="createArticle__title">
                    <div className="createArticle__form">
                        <textarea value={this.props.newTitleState} ref={this.titleElement}
                                  onChange={this.onTitleStateChange} className="createArticle__textarea"
                                  placeholder="Заголовок" maxLength="50" />
                    </div>
                </div>
                <div className="createArticle__description">
                    <div className="createArticle__form">
                        <textarea value={this.props.newDescriptionState} ref={this.descriptionElement}
                                  onChange={this.onDescriptionStateChange} className="createArticle__textarea"
                                  placeholder="Краткое описание" maxLength="200" />
                    </div>
                </div>
                <div className="createArticle__category">
                    <div className="createArticle__category-title">Выберите категорию</div>
                    {this.cleverTags()}
                </div>
                <div className="createArticle__preview">
                    <div className="createArticle__preview-title">Выберите фотографию на заставку</div>
                    <div>
                        {this.uploadFileButton()}
                        <InputUrlWindow isInputUrlOpen={this.props.isInputUrlOpen}
                                        onAddWindowUrl={this.props.onAddWindowUrl}
                                        closeWindowUrl={this.props.closeWindowUrl}
                                        updateUrlState={this.props.updateUrlState}
                                        newInputUrlState={this.props.newInputUrlState}/>
                    </div>
                </div>

                <Editor
                    editorState={this.props.newEditorState}
                    editorClassName="createArticle__editor"
                    toolbarClassName="createArticle__toolbar"
                    placeholder='Напишите что-нибудь...'
                    onEditorStateChange={this.props.onEditorStateChanged}
                />

                {this.publishArticle()}

            </div>
        )
    }
}


export default CreateArticle;