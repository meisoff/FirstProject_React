import React, { Component} from 'react';
import {NavLink} from "react-router-dom";

class Followers extends Component {

    render() {
        return (
            <div className="follow__body">
                <h1 className="follow__title">Подписчики</h1>

                <ul className="follow__list">
                    {this.props.columnTwo}
                </ul>

                <NavLink className="follow__link" to="/">Перейти</NavLink>
            </div>
        )
    }
}

export default Followers;