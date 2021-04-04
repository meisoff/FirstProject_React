import React from "react";
import {NavLink} from "react-router-dom";

const NavRight = () => {
    return (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <NavLink to='/profile' className="nav__link" >Профиль</NavLink>
            </li>
            <li className="nav__item">
                <a className="nav__link" href="/#">Выйти</a>
            </li>
        </ul>
    </nav>
    )
}

export default NavRight;
