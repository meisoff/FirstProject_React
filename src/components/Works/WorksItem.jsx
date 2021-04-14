import React from 'react';
import {NavLink} from "react-router-dom";

const WorksItem = (props) => {

    let tagsItem =
        props.content.tags.map(element => <li className="tags__item">{element}</li>)


    return (
        <article className="work">
            <div className="work__preview">
                <picture>
                    <source srcSet={props.preview.smallImage} media="(max-width: 700px)"/>
                    <img src={props.preview.bigImage} alt={props.preview.alt}/>
                </picture>
            </div>
            <div className="work__content">
                <h2 className="work__title">
                    <NavLink to={props.link} target="_blank">{props.content.title}</NavLink>
                </h2>
                <div className="work__description">
                    <p>
                        {props.content.description}
                    </p>
                </div>
                <ul className="tags">
                    {tagsItem}
                </ul>
                <div className="work__footer">
                    <NavLink to={props.link} className="btn btn--blue btn--rounded btn--small" target="_blank">Перейти на
                        сайт</NavLink>
                </div>
            </div>
        </article>
    )

}

export default WorksItem;