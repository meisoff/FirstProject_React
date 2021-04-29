import React from "react";
import baseAvatar from "../../images/user_photo.png";

class ProfileUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.status,
            editMode: false,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    onStatusChange = (status) => {
        this.setState({status: status.currentTarget.value})
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status)
    }

    render() {
        return (
            <div className="profileUser__bg">
                <div className="profileUser__ownInfo">
                    <div className="profileUser__avatar">
                        {this.props.userInfo.photos.large ?
                            <img src={this.props.userInfo.photos.large} alt="Basic avatar"/>
                            : <img src={baseAvatar} alt="Basic avatar"/>
                        }
                        <div className="profileUser__avatar-button">
                            <button className="follow__button">Написать</button>
                        </div>
                        <div className="profileUser__avatar-button">
                            <button className="follow__button">Подписаться</button>
                        </div>
                    </div>
                    <div className="profileUser__shortInfo">
                        <h2 className="profileUser__fullName">Александр Калыргин</h2>
                        <div className="profileUser__status">
                            {!this.state.editMode &&
                            <div onDoubleClick={this.activateEditMode}>{this.props.status}</div>}
                            {this.state.editMode &&
                            <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.deactivateEditMode}
                                   value={this.state.status}/>}
                        </div>
                        <div className="profileUser__shortDescription">
                            <div className="profileUser__item">
                                <h3 className="profileUser__item-title">Контакты</h3>
                                <div className="profileUser__item-list">

                                    {!!this.props.userInfo.contacts.facebook ?
                                        <div className="profileUser__list">
                                            <span className="profileUser__list-flex1">facebook:</span>
                                            <a href={this.props.userInfo.contacts.facebook} rel="noreferrer" target="_blank" className="profileUser__list-flex2">Ссылка</a>
                                        </div>
                                        : null}

                                    {this.props.userInfo.contacts.website ?
                                        <div className="profileUser__list">
                                            <span className="profileUser__list-flex1">website:</span>
                                            <a href={this.props.userInfo.contacts.website} rel="noreferrer" target="_blank" className="profileUser__list-flex2">Ссылка</a>
                                        </div>
                                        : null}


                                    {this.props.userInfo.contacts.vk ?
                                        <div className="profileUser__list">
                                            <span className="profileUser__list-flex1">vk:</span>
                                            <a href={this.props.userInfo.contacts.vk} rel="noreferrer" target="_blank" className="profileUser__list-flex2">Ссылка</a>
                                        </div>
                                        : null}

                                    {this.props.userInfo.contacts.twitter ?
                                        <div className="profileUser__list">
                                            <span className="profileUser__list-flex1">twitter:</span>
                                            <a href={this.props.userInfo.contacts.twitter} rel="noreferrer" target="_blank" className="profileUser__list-flex2">Ссылка</a>
                                        </div>
                                        : null}

                                    {this.props.userInfo.contacts.instagram ?
                                        <div className="profileUser__list">
                                            <span className="profileUser__list-flex1">instagram:</span>
                                            <a href={this.props.userInfo.contacts.instagram} rel="noreferrer" target="_blank" className="profileUser__list-flex2">Ссылка</a>
                                        </div>
                                        : null}

                                    {this.props.userInfo.contacts.youtube ?
                                        <div className="profileUser__list">
                                            <span className="profileUser__list-flex1">youtube:</span>
                                            <a href={this.props.userInfo.contacts.youtube} rel="noreferrer" target="_blank" className="profileUser__list-flex2">Ссылка</a>
                                        </div>
                                        : null}

                                    {this.props.userInfo.contacts.github ?
                                        <div className="profileUser__list">
                                            <span className="profileUser__list-flex1">github:</span>
                                            <a href={this.props.userInfo.contacts.github} rel="noreferrer" target="_blank" className="profileUser__list-flex2">Ссылка</a>
                                        </div>
                                        : null}

                                    {this.props.userInfo.contacts.mainLink ?
                                        <div className="profileUser__list">
                                            <span className="profileUser__list-flex1">mainLink:</span>
                                            <a href={this.props.userInfo.contacts.mainLink} rel="noreferrer" target="_blank" className="profileUser__list-flex2">Ссылка</a>
                                        </div>
                                        : null}
                                </div>
                            </div>

                            <div className="profileUser__item">
                                <h3 className="profileUser__item-title">Работа</h3>
                                <div className="profileUser__item-list">
                                    <div className="profileUser__list">
                                        <span className="profileUser__list-flex1">Место работы:</span>
                                        <span
                                            className="profileUser__list-flex2">{this.props.userInfo.lookingForAJob ? "Работаю" : "В поиске"}</span>
                                    </div>
                                    <div className="profileUser__list">
                                        <span className="profileUser__list-flex1">Описание:</span>
                                        <span
                                            className="profileUser__list-flex2">{this.props.userInfo.lookingForAJobDescription ? this.props.userInfo.lookingForAJobDescription : "Без описания"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profileUser__aboutMe">
                    <div className="profileUser__shortDescription">
                        <h3 className="profileUser__item-title">Обо мне</h3>
                        <div className="profileUser__wrapper-description">
                            {this.props.userInfo.aboutMe ? this.props.userInfo.aboutMe : "Нет информации"}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileUser;