import React from 'react';
import {NavLink} from "react-router-dom";
import Share from "../../images/share.svg";

const ArticleItem = (props) => {
    if (props.element.content.hasOwnProperty('testPage')) {
        return (
            props.element.content.testPage
        )
    }
    else if (props.element.content.hasOwnProperty('html')) {
        return (
            <article className="post">
                <div className="post__actions">
                    <NavLink to='/'>вернуться назад</NavLink>
                    <div className="post__actions-share-modal">поделиться
                        <img className="post__actions-icon" src={Share} alt="поделиться"/>
                    </div>
                </div>
                <div className="post__header">
                    <h1 className="post__title post__title--mb0">
                        {props.element.content.title}
                    </h1>
                    <ul className="post__data">
                        <li className="post__data-item">
                            <time dateTime={props.element.footer.dateTime}>{props.element.footer.date}</time>
                        </li>
                        <li className="post__data-item">
                            <NavLink to="/#">{props.element.category}</NavLink>
                        </li>
                    </ul>
                </div>
                <div dangerouslySetInnerHTML={{__html: props.element.content.html}} />
            </article>
        )
    }
}

export default ArticleItem;