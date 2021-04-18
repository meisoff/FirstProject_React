import React from "react";
import {NavLink} from "react-router-dom";

const NoneAuthUser = () => {
    return (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <NavLink to="/signin" className="nav__link" >Войти</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="/signup" className="nav__link" >Регистрация</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default NoneAuthUser;
