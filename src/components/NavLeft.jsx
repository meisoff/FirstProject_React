import React from "react";

const NavLeft = () => {
    return (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
                <a className="nav__link" href="index.html">Главная</a>
            </li>
            <li className="nav__item">
                <a className="nav__link has-subnav" href="/#">Статьи</a>

                <ul className="subnav">
                    <li>
                        <a className="subnav__link" href="/#">Создание сайтов</a>
                    </li>

                    <li>
                        <a className="subnav__link" href="/#">Интернет-маркетинг</a>
                    </li>

                    <li>
                        <a className="subnav__link" href="/#">Продвижение видео</a>
                    </li>
                </ul>
            </li>
            <li className="nav__item">
                <a className="nav__link" href="/#">Обо мне</a>
            </li>
            <li className="nav__item">
                <a className="nav__link" href="/#">Реклама</a>
            </li>
        </ul>
    </nav>
    /* ./navigation */
    )
}

export default NavLeft;

