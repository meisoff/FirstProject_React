import React, { Component} from 'react';
import {NavLink} from "react-router-dom";

class Followers extends Component {

    render() {
        return (
            <div className="follow__body">
                <h1 className="follow__title">Подписчики</h1>

                <ul className="follow__list">
                    <li className="follow__item">
                        <div className="follow__item-img" />

                        <div className="follow__item-info">
                            <div className="follow__info-name">Александр</div>
                            <div className="follow__info-login">Meisoff</div>
                        </div>

                        <button className="btn btn--rounded btn--small btn--blue">Подписка</button>
                    </li>
                    <li className="follow__item">
                        <div className="follow__item-img" />

                        <div className="follow__item-info">
                            <div className="follow__info-name">Александр</div>
                            <div className="follow__info-login">Meisoff</div>
                        </div>

                        <button className="btn btn--rounded btn--small btn--blue">Подписка</button>
                    </li>
                    <li className="follow__item">
                        <div className="follow__item-img" />

                        <div className="follow__item-info">
                            <div className="follow__info-name">Александр</div>
                            <div className="follow__info-login">Meisoff</div>
                        </div>

                        <button className="btn btn--rounded btn--small btn--blue">Подписка</button>
                    </li>
                    <li className="follow__item">
                        <div className="follow__item-img" />

                        <div className="follow__item-info">
                            <div className="follow__info-name">Александр</div>
                            <div className="follow__info-login">Meisoff</div>
                        </div>

                        <button className="btn btn--rounded btn--small btn--blue">Подписка</button>
                    </li>
                    <li className="follow__item">
                        <div className="follow__item-img" />

                        <div className="follow__item-info">
                            <div className="follow__info-name">Александр</div>
                            <div className="follow__info-login">Meisoff</div>
                        </div>

                        <button className="btn btn--rounded btn--small btn--blue">Подписка</button>
                    </li>
                    <li className="follow__item">
                        <div className="follow__item-img" />

                        <div className="follow__item-info">
                            <div className="follow__info-name">Александр</div>
                            <div className="follow__info-login">Meisoff</div>
                        </div>

                        <button className="btn btn--rounded btn--small btn--blue">Подписка</button>
                    </li>
                </ul>

                <NavLink className="follow__link" to="/">Перейти</NavLink>
            </div>
        )
    }
}

export default Followers;