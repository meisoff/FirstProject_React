import React from "react";
import baseAvatar from "../../images/user_photo.png";

class ProfileUser extends React.Component {
    render() {
        return (
            <div>
                <h1 className="profileUser__login">meisoff</h1>
                <div className="profileUser__ownInfo">
                    <div className="profileUser__avatar">
                        <img src={baseAvatar} alt="Basic avatar"/>
                    </div>
                    <div className="profileUser__shortInfo">
                        <h2 className="profileUser__fullName">Александр Калыргин</h2>
                        <div className="profileUser__status">Работаю из дома</div>
                        <div className="profileUser__contacts">
                            <h3 className="profileUser__contacts-title">Контакты</h3>
                            <ul className="profileUser__contacts-list">
                                <li className="profileUser__list-item">
                                    telegram: @meisoff
                                </li>
                                <li className="profileUser__list-item">
                                    instagram: @meisoff
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="profileUser__aboutMe">Front-end разработчик. Практик верстки сайтов. Созданием сайтов занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов в создании сайтов различной сложности.</div>

            </div>
        )
    }
}

export default ProfileUser;