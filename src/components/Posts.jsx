import React from "react";
import Post2 from "../images/post-2.jpg";
import Post3 from "../images/post-3.jpg";
import {NavLink} from "react-router-dom";


const Posts = () => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <div className="post__description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sequi tempora totam dolor distinctio nihil sed itaque
                        illum amet commodi quasi cumque facilis nesciunt iusto, excepturi
                        mollitia molestias voluptatibus recusandae ea.
                    </div>
                </div>

                <div className="post__footer">
                    <ul className="post__data">
                        <li className="post__data-item">
                            <time dateTime="2021-02-14 12:26">14.02.2021</time>
                        </li>
                    </ul>
                </div>
            </div>

            <article className="post">
                <div className="post__header post__header--preview">
                    <NavLink to='/posts'>
                        <img className="post__preview" src={Post2}
                             alt="Как писать код быстро и безболезненно?" />
                    </NavLink>
                </div>
                <div className="post__content">
                    <h2 className="post__title">
                        <NavLink to='/posts'>Как писать код быстро и безболезненно?</NavLink>
                    </h2>
                    <p className="post__description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sequi tempora totam dolor distinctio nihil sed itaque
                        illum amet commodi quasi cumque facilis nesciunt iusto, excepturi
                        mollitia molestias voluptatibus recusandae ea.
                    </p>
                </div>

                <div className="post__footer">
                    <ul className="post__data">
                        <li className="post__data-item">
                            <time dateTime="2021-02-14 12:26">14.02.2021</time>
                        </li>
                        <li className="post__data-item">
                            <a href="/#">cоздание сайтов</a>
                        </li>
                    </ul>

                    <NavLink to='/posts' className="post__read">читать</NavLink>
                </div>
            </article>

            <article className="post">
                <div className="post__header">
                    <div className="embed">
                        <iframe src="https://www.youtube.com/embed/p4zbV1MBJNs" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                </div>
                <div className="post__content">
                    <h2 className="post__title">
                        <NavLink to='/posts' >Купил новый ноутбук за 150 000 руб</NavLink>
                    </h2>
                </div>

                <div className="post__footer">
                    <ul className="post__data">
                        <li className="post__data-item">
                            <time dateTime="2021-02-14 12:26">14.02.2021</time>
                        </li>
                        <li className="post__data-item">
                            <a href="/#">продвижение видео</a>
                        </li>
                    </ul>

                    <NavLink to='/posts' className="post__read">оставить комментарий</NavLink>
                </div>
            </article>

            <article className="post">
                <div className="post__header post__header--preview">
                    <NavLink to='/posts'>
                        <img className="post__preview" src={Post3}
                             alt="Как я сходил на FrontEnd Conf 2021" />
                    </NavLink>
                </div>
                <div className="post__content">
                    <h2 className="post__title">
                        <NavLink to='/posts'>Как я сходил на FrontEnd Conf 2021</NavLink>
                    </h2>
                    <p className="post__description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sequi tempora totam dolor distinctio nihil sed itaque
                        illum amet commodi quasi cumque facilis nesciunt iusto, excepturi
                        mollitia molestias voluptatibus recusandae ea.
                    </p>
                </div>

                <div className="post__footer">
                    <ul className="post__data">
                        <li className="post__data-item">
                            <time dateTime="2021-02-10 12:26">10.02.2021</time>
                        </li>
                        <li className="post__data-item">
                            <a href="/#">cоздание сайтов</a>
                        </li>
                    </ul>

                    <NavLink to='/posts' className="post__read">читать</NavLink>
                </div>
            </article>
        </div>
    )
}

export default Posts;