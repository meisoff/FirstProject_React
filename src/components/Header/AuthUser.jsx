import React from "react";
import {NavLink} from "react-router-dom";

export let authLoginLength = (login) => {
    if (login.length > 11) {
        return login.slice(0, 11) + "..."
    }
    else {
        return login
    };
}

const AuthUser = (props) => {
    return (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <div className="nav__link" style={{display: "flex"}}>
                    <div className="nav__link-avatar" style={{backgroundImage: `url(${props.avatar})`}}/>
                    <div>Профиль</div>
                </div>

                <ul className="subnav">
                    <li>
                        <NavLink to="/#" className="subnav__link subnav__link--line" >Вы вошли как <i style={{fontWeight: 700}}>{authLoginLength(props.login)}</i></NavLink>   {/*LOGIN*/}
                    </li>

                    <li>
                        <NavLink to="/#" className="subnav__link subnav__link--line" >Статус</NavLink>
                    </li>

                    <li>
                        <NavLink to="/#" className="subnav__link" >Мессенджер</NavLink>
                    </li>

                    <li>
                        <NavLink to="/social" className="subnav__link" >Сообщество</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile_user" className="subnav__link" >Мой профиль</NavLink>
                    </li>

                    <li>
                        <NavLink to='/profile' className="subnav__link subnav__link--line">Редактировать профиль</NavLink>
                    </li>

                    <li>
                        <NavLink to='/' onClick={props.logoutUser} className="subnav__link">Выйти</NavLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
    )
}

export default AuthUser;
