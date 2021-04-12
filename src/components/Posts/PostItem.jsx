import React from "react";
import {NavLink} from "react-router-dom";

const PostItem = (props) => {

    if (props.hasOwnProperty('header')) {
        if (props.header.hasOwnProperty('image')) {
            return (
                <article className="post">
                    <div className="post__header post__header--preview">
                        <NavLink to={props.link}>
                            <img className="post__preview" src={props.header.image}
                                 alt={props.header.alt}/>
                        </NavLink>
                    </div>
                    <div className="post__content">
                        <h2 className="post__title">
                            <NavLink to={props.link}>{props.content.title}</NavLink>
                        </h2>
                        <p className="post__description">
                            {props.content.description}
                        </p>
                    </div>

                    <div className="post__footer">
                        <ul className="post__data">
                            <li className="post__data-item">
                                <time dateTime={props.footer.dateTime}>{props.footer.date}</time>
                            </li>
                            <li className="post__data-item">
                                <NavLink to="/#">{props.category}</NavLink>
                            </li>
                        </ul>

                        <NavLink to={props.link} className="post__read">читать</NavLink>
                    </div>
                </article>
            )
        } else {
            return (
                <article className="post">
                    <div className="post__header">
                        <div className="embed">
                            <iframe src={props.header.video} frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="post__content">
                        <h2 className="post__title">
                            <NavLink to={props.link}>{props.content.title}</NavLink>
                        </h2>
                        <p className="post__description">
                            {props.content.description}
                        </p>
                    </div>

                    <div className="post__footer">
                        <ul className="post__data">
                            <li className="post__data-item">
                                <time dateTime={props.footer.dateTime}>{props.footer.date}</time>
                            </li>
                            <li className="post__data-item">
                                <NavLink to="/#">{props.category}</NavLink>
                            </li>
                        </ul>

                        <NavLink to='/posts' className="post__read">оставить комментарий</NavLink>
                    </div>
                </article>
            )
        }
    } else {
        return (
            <div className="post">
                <div className="post__content">
                    <div className="post__description">
                        {props.content.description}
                    </div>
                </div>

                <div className="post__footer">
                    <ul className="post__data">
                        <li className="post__data-item">
                            <time dateTime={props.footer.dateTime}>{props.footer.date}</time>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PostItem;