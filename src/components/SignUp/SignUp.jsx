import React, { Component} from 'react';
import {NavLink} from "react-router-dom";

class SignUp extends Component {

    render() {
        return (
            <div>
                <h1 className="page__title page__title--center">Регистрация</h1>

                <form className="form form--auth">
                    <div className="form__group form__group--md">
                        <input type="text" className="form__control" placeholder="Ваше имя" />
                            <span className="form__line" />
                    </div>

                    <div className="form__group form__group--md">
                        <input type="email" className="form__control" placeholder="Ваш e-mail" />
                            <span className="form__line" />
                    </div>

                    <div className="form__group form__group--md">
                        <input type="password" className="form__control" placeholder="Пароль" />
                            <span className="form__line" />
                    </div>

                    <div className="form__group form__group--md">
                        <input type="password" className="form__control" placeholder="Подтвердите пароль" />
                            <span className="form__line" />
                    </div>

                    <div className="form__footer form__footer--center">
                        <div className="form__group form__group--md">
                            <button className="btn btn--blue btn--rounded btn--small">Регистрация</button>
                        </div>
                        <ul className="form__footer-list">
                            <li>
                                <NavLink to="/signin">Войти</NavLink>
                            </li>
                            <li>
                                <NavLink to="/reset">Восстановить</NavLink>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;