import React, {Component, createRef} from 'react';
import s from './InputUrlWindow.module.css' 

class InputUrlWindow extends Component {
    constructor(props) {
        super(props);
        this.urlElement = createRef();
    }

    updateUrlState = () => {
        let url = this.urlElement.current.value;
        this.props.updateUrlState(url);
    }

    modalUrl = () => {
        return (
            <div className={s.rdw_image_modal}>
                <div className={s.rdw_image_modal_header}>
                    <span className={s.rdw_image_modal_header_option}>
                        URL
                        <span className={s.rdw_image_modal_header_label_highlighted} />
                    </span>
                </div>
                <div className={s.rdw_image_modal_url_section}>
                    <input className={s.rdw_image_modal_url_input} name="imgSrc" onChange={this.updateUrlState} ref={this.urlElement} value={this.props.newInputUrlState} />
                    <span className={s.rdw_image_mandatory_sign}>*</span>
                </div>
                <span className={s.rdw_image_modal_btn_section}>
                    <button className={s.rdw_image_modal_btn_add} onClick={() => this.props.onAddWindowUrl()}>Add</button>
                    <button className={s.rdw_image_modal_btn_close} onClick={() => this.props.closeWindowUrl()}>Cancel</button>
                </span>
            </div>
        )
    }

    toggleInputUrl = () => {
        if (this.props.isInputUrlOpen) {
            return (
                <div className={s.wrapper_active}>
                    {this.modalUrl()}
                </div>
            )
        } else {
            return (
                <div className={s.wrapper_disable}>
                    {this.modalUrl()}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.toggleInputUrl()}
            </div>
        )
    }
}

export default InputUrlWindow;