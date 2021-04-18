import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Social extends Component {

    render() {
        return (
            <div className="social__bg">
                <div className="follow__body">
                    <h1 className="follow__title">Поиск по сообществу</h1>

                    <div className="follow__search-list">
                        <ul className="follow__list">
                            {this.props.columnOne}
                        </ul>

                        <ul className="follow__list">
                            {this.props.columnTwo}
                        </ul>
                    </div>

                    <NavLink className="follow__link" to="/">Перейти</NavLink>
                </div>
            </div>
        )
    }
}

export default Social;