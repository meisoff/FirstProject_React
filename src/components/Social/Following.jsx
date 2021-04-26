import React, { Component} from 'react';
import {NavLink} from "react-router-dom";

class Following extends Component {

    render() {
        return (
            <div className="follow__body">
                <h1 className="follow__title">Подписки</h1>

                <ul className="follow__list">
                    {this.props.columnOne}
                </ul>

                <NavLink className="follow__link" to="/following">Перейти</NavLink>
            </div>
        )
    }
}

export default Following;