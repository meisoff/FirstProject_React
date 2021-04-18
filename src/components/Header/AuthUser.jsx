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
                    <div className="nav__link-avatar" style={{backgroundImage: `url(https://sun9-2.userapi.com/impg/I9s8f_Zsnit4SNdm1QUS2sgp2bw4e90ZRPZOVw/O4gTLuvfqJ0.jpg?size=1199x1200&quality=96&sign=023ae353dccafd3279a7f0768b795144&type=album)`}}/>
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
                        <NavLink to='/profile' className="subnav__link subnav__link--line">Редактировать профиль</NavLink>
                    </li>

                    <li>
                        <NavLink to='/' className="subnav__link">Выйти</NavLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
    )
}

export default AuthUser;
