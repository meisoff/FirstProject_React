import React from "react";
import {NavLink} from "react-router-dom";

const PostItem = (props) => {

    if (props.hasOwnProperty('image')) {
        return (
            <article className="post">
                <div className="post__header post__header--preview">
                    <NavLink to={props.link}>
                        <img className="post__preview" src={props.image}
                             alt={props.alt}/>
                    </NavLink>
                </div>
                <div className="post__content">
                    <h2 className="post__title">
                        <NavLink to={`${props.link}`}>{props.title}</NavLink>
                    </h2>
                    <p className="post__description">
                        {props.description}
                    </p>
                </div>

                <div className="post__footer">
                    <ul className="post__data">
                        <li className="post__data-item">
                            <time dateTime={props.dateTime}>{props.date}</time>
                        </li>
                        <li className="post__data-item">
                            <a href="/#">cоздание сайтов</a>
                        </li>
                    </ul>

                    <NavLink to={props.link} className="post__read">читать</NavLink>
                </div>
            </article>
        )
    } else if (props.hasOwnProperty('video')) {
        return (
            <article className="post">
                <div className="post__header">
                    <div className="embed">
                        <iframe src={props.video} frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                </div>
                <div className="post__content">
                    <h2 className="post__title">
                        <NavLink to={props.link}>{props.title}</NavLink>
                    </h2>
                    <p className="post__description">
                        {props.description}
                    </p>
                </div>

                <div className="post__footer">
                    <ul className="post__data">
                        <li className="post__data-item">
                            <time dateTime={props.dateTime}>{props.date}</time>
                        </li>
                        <li className="post__data-item">
                            <a href="/#">cоздание сайтов</a>
                        </li>
                    </ul>

                    <NavLink to='/posts' className="post__read">оставить комментарий</NavLink>
                </div>
            </article>
        )
    } else {
        return (
            <div className="post">
                <div className="post__content">
                    <div className="post__description">
                        {props.description}
                    </div>
                </div>

                <div className="post__footer">
                    <ul className="post__data">
                        <li className="post__data-item">
                            <time dateTime={props.dateTime}>{props.date}</time>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default PostItem;