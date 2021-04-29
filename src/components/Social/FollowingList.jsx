import React from 'react';
import {NavLink} from "react-router-dom";

const FollowingList = (props) => {

    return (
        <div className="social__bg">
            <div className="follow__body">
                <h1 className="follow__title">Подписки</h1>

                <div className="follow__search-list">
                    <ul className="follow__list">
                        {props.columnFirst}
                    </ul>

                    <ul className="follow__list">
                        {props.columnSecond}
                    </ul>
                </div>

                <NavLink className="follow__link" to="/following">Перейти</NavLink>
            </div>
        </div>
    )
}

export default FollowingList;