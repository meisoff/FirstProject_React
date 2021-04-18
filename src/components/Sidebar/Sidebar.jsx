import React from "react";
import SidebarHeader from "../../images/sidebar__header.jpg";
import Inst from "../../images/inst.svg";
import Vk from "../../images/vk.svg";
import Github from "../../images/GitHub.png"
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
    <aside className="sidebar" id="sidebar">
        <div className="sidebar__header">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={SidebarHeader} alt="Sidebar photo" />
        </div>
        <div className="sidebar__content">
            <div className="profile">
                <img className="profile__avatar" src="https://sun9-2.userapi.com/impg/I9s8f_Zsnit4SNdm1QUS2sgp2bw4e90ZRPZOVw/O4gTLuvfqJ0.jpg?size=1199x1200&quality=96&sign=023ae353dccafd3279a7f0768b795144&type=album" alt="" />
                    <div className="profile__header">
                        <div className="profile__name">Александр Калыргин</div>
                        <div className="profile__prof">блог Front-end разработчика</div>
                    </div>

                    <ul className="social social--sidebar">
                        <li className="social__item">
                            <a className="social__link" href="https://www.instagram.com/kalyrg1n/" target="_blank" rel="noreferrer">
                                <img src={Inst} alt="Александр Instagram Калыргин" />
                            </a>
                        </li>

                        <li className="social__item">
                            <a className="social__link" href="https://vk.com/official_meis" target="_blank" rel="noreferrer">
                                <img src={Vk} alt="Александр VK Калыргин" />
                            </a>
                        </li>

                        <li className="social__item">
                            <a className="social__link" href="https://github.com/meisoff" target="_blank" rel="noreferrer">
                                <img src={Github} style={{width: 19, height: 19}} alt="Александр GitHub Калыргин" />
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
                        <NavLink to='/' className="nav__link" >Главная</NavLink>
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
                        <NavLink to='/profile' className="nav__link" >Профиль</NavLink>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="/#">Выйти</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div className="sidebar__footer">
            <NavLink to='/works' className="btn btn--red" >Мои работы</NavLink>
            <button className="btn btn--blue" type="button" data-modal="contact-modal">Написать мне</button>
        </div>
    </aside>
    )
}

export default Sidebar;