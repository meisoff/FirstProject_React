import React from "react";

const NavRight = () => {
    return (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <a className="nav__link" href="profile.html">Профиль</a>
            </li>
            <li className="nav__item">
                <a className="nav__link" href="/#">Выйти</a>
            </li>
        </ul>
    </nav>
    )
}

export default NavRight;
