import React from "react";
import SidebarHeader from "../images/sidebar__header.jpg";
import Inst from "../images/inst.svg";
import Vk from "../images/vk.svg";
import Pinterest from "../images/pinterest.svg";

const Sidebar = () => {
    return (
    <aside className="sidebar" id="sidebar">
        <div className="sidebar__header">
            <img src={SidebarHeader} alt="Sidebar photo" />
        </div>
        <div className="sidebar__content">
            <div className="profile">
                <img className="profile__avatar" src="http://placehold.it/100" alt="" />
                    <div className="profile__header">
                        <div className="profile__name">Александр Калыргин</div>
                        <div className="profile__prof">блог Front-end разработчика</div>
                    </div>

                    <ul className="social social--sidebar">
                        <li className="social__item">
                            <a className="social__link" href="/#" target="_blank">
                                <img src={Inst} alt="Александр Instagram Калыргин" />
                            </a>
                        </li>

                        <li className="social__item">
                            <a className="social__link" href="/#" target="_blank">
                                <img src={Vk} alt="Александр VK Калыргин" />
                            </a>
                        </li>

                        <li className="social__item">
                            <a className="social__link" href="/#" target="_blank">
                                <img src={Pinterest} alt="Александр Pinterest Калыргин" />
                            </a>
                        </li>
                    </ul>

                    <div className="profile__text">
                        <p>
                            Front-end разработчик. Практик верстки сайтов. Созданием сайтов занимаюсь
                            с 2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000
                            часов в создании сайтов различной сложности.
                        </p>
                    </div>
            </div>

            <nav className="nav  nav--mobile">
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
                    <li className="nav__item">
                        <a className="nav__link" href="profile.html">Профиль</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="/#">Выйти</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div className="sidebar__footer">
            <a className="btn btn--red" href="works.html">Мои работы</a>
            <button className="btn btn--blue" type="button" data-modal="contact-modal">Написать мне</button>
        </div>
    </aside>
    )
}

export default Sidebar;