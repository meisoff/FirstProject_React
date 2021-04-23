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
                        <img src={baseAvatar} alt="Basic avatar"/>
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
                                    <div className="profileUser__list">
                                        <span className="profileUser__list-flex1">telegram:</span>
                                        <span className="profileUser__list-flex2">@meisoff</span>
                                    </div>
                                    <div className="profileUser__list">
                                        <span className="profileUser__list-flex1">instagram:</span>
                                        <span className="profileUser__list-flex2">@meisoff</span>
                                    </div>
                                    <div className="profileUser__list">
                                        <span className="profileUser__list-flex1">email:</span>
                                        <span className="profileUser__list-flex2">meisoff__cool@meisoff.ru</span>
                                    </div>
                                </div>
                            </div>

                            <div className="profileUser__item">
                                <h3 className="profileUser__item-title">Работа</h3>
                                <div className="profileUser__item-list">
                                    <div className="profileUser__list">
                                        <span className="profileUser__list-flex1">Место работы:</span>
                                        <span className="profileUser__list-flex2">В поиске</span>
                                    </div>
                                    <div className="profileUser__list">
                                        <span className="profileUser__list-flex1">Описание:</span>
                                        <span
                                            className="profileUser__list-flex2">Ищу работу, знаю это это и это</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profileUser__aboutMe">
                    <div className="profileUser__shortDescription">
                        <h3 className="profileUser__item-title">Обо мне</h3>
                        <div className="profileUser__wrapper-description">Front-end разработчик. Практик верстки
                            сайтов. Созданием
                            сайтов занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000
                            часов в
                            создании сайтов различной сложности.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileUser;