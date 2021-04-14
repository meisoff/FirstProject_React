import React from "react";

const Profile = () => {
    return (
        <div>
            <h1 className="page__title">Профиль</h1>

            <form action="/" method="POST" className="form">
                <div className="cabinet">
                    <div className="cabinet__form">
                        <div className="form__group form__group--md">
                            <input type="text" className="form__control" placeholder="Ваше имя"
                                   value="Александр Калыргин"/>
                            <span className="form__line" />
                        </div>

                        <div className="form__group form__group--md">
                            <input type="email" className="form__control" placeholder="Ваш e-mail"
                                   value="kalyrginwot@mail.ru"/>
                            <span className="form__line" />
                        </div>

                        <div className="form__group form__group--md">
                            <input type="password" className="form__control" placeholder="Новый пароль"/>
                            <span className="form__line" />
                        </div>

                        <div className="form__group form__group--md">
                            <input type="password" className="form__control" placeholder="Повторите пароль"/>
                            <span className="form__line" />
                        </div>
                    </div>
                    <div className="cabinet__avatar">
                        <img src="http://placehold.it/150" alt="avatar"/>

                        <label className="cabinet__file">
                            <input type="file"/>
                            выбрать аватар
                        </label>
                    </div>
                </div>


                <button className="btn btn--blue btn--rounded btn--small" type="submit">Сохранить</button>
            </form>
        </div>
    )
}

export default Profile;