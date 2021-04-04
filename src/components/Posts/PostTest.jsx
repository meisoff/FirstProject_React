import React from 'react';
import {NavLink} from "react-router-dom";
import Share from '../../images/share.svg';
import Image from '../../images/image.jpg';

const PostTest = () => {
    return (
        <article className="post">
            <div className="post__actions">
                <NavLink to='/'>вернуться назад</NavLink>
                <a data-modal="share-modal">поделиться
                    <img className="post__actions-icon" src={Share} alt="поделиться"/>
                </a>
            </div>
            <div className="post__header">
                <h1 className="post__title post__title--mb0">
                    Как писать код быстро и безболезненно?
                </h1>
                <ul className="post__data">
                    <li className="post__data-item">
                        <time datetime="2021-02-14 12:26">14.02.2021</time>
                    </li>
                    <li className="post__data-item">
                        <a href="/#">cоздание сайтов</a>
                    </li>
                </ul>
            </div>
            <div className="post__content">
                <div className="post__text">
                    <h2>title h2</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sequi tempora totam dolor distinctio nihil sed itaque
                        illum amet commodi quasi cumque facilis nesciunt iusto, excepturi
                        mollitia molestias voluptatibus recusandae ea.
                    </p>

                    <h3>title h3</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sequi tempora totam dolor distinctio nihil sed itaque
                        illum amet commodi quasi cumque facilis nesciunt iusto, excepturi
                        mollitia molestias voluptatibus recusandae ea.
                    </p>

                    <h4>title h3</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sequi tempora totam dolor distinctio nihil sed itaque
                        illum amet commodi quasi cumque facilis nesciunt iusto, excepturi
                        mollitia molestias voluptatibus recusandae ea.
                    </p>

                    <img src={Image} alt="код"/>

                    <ul>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>

                    <ol>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ol>

                    <table>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                    </table>
                </div>

                <div className="related">
                    <h3 className="post__subtitle">
                        Интересно почитать
                    </h3>

                    <ul className="related__list">
                        <li className="related__list-item">
                            <h4 className="related__list-title"><a href="/#">Как я сходил на FrontEnd Conf 2021</a>
                            </h4>
                            <time className="related__list-date" datetime="2021-02-14 12:06">14.02.2021</time>
                        </li>
                        <li className="related__list-item">
                            <h4 className="related__list-title"><a href="/#">Купил новый ноутбук за 150 000 руб</a>
                            </h4>
                            <time className="related__list-date" datetime="2021-02-14 12:06">14.02.2021</time>
                        </li>
                        <li className="related__list-item">
                            <h4 className="related__list-title"><a href="/#">Как писать код быстро и
                                безболезненно?</a></h4>
                            <time className="related__list-date" datetime="2021-02-14 12:06">14.02.2021</time>
                        </li>
                        <li className="related__list-item">
                            <h4 className="related__list-title"><a href="/#">Купил новый ноутбук за 150 000 руб</a>
                            </h4>
                            <time className="related__list-date" datetime="2021-02-14 12:06">14.02.2021</time>
                        </li>
                    </ul>
                </div>


                <h3 className="post__subtitle">Обсуждение</h3>
                <form className="form" action="/" method="POST">
                    <div className="form__group">
                            <textarea className="form__control form__control--textarea" name="comment-text"
                                      placeholder="Текст комментария" data-autoresize></textarea>
                        <span className="form__line"></span>
                    </div>
                </form>
                <button className="btn btn--blue btn--rounded btn--small" type="submit">Отправить</button>
                <ul className="comments">
                    <li className="comments__item">
                        <div className="comments__header">
                            <img className="comments__avatar" src="http://placehold.it/30" alt="Avatar"/>
                            <div className="comments__author">
                                <div className="comments__name">Александр Калыргин</div>
                                <time className="comments__pubdate" datetime="2021-02-09 21:02">1 неделю назад
                                </time>
                            </div>
                        </div>
                        <div className="comments__text">Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor
                            orci auctor in at tincidunt arcu egestas.
                            Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas
                            ornare vel volutpat.
                        </div>
                        <button className="comments__reply" type="button">ответить</button>

                        <ul className="comments">
                            <li className="comments__item">
                                <div className="comments__header">
                                    <img className="comments__avatar" src="http://placehold.it/30" alt=""/>
                                    <div className="comments__author">
                                        <div className="comments__name">Александр Калыргин</div>
                                        <time className="comments__pubdate" datetime="2021-02-09 21:02">1 неделю
                                            назад
                                        </time>
                                    </div>
                                </div>
                                <div className="comments__text">Et vestibulum, posuere tortor lacinia sit. Sagittis
                                    porttitor orci auctor in at tincidunt arcu egestas.
                                    Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa.
                                    Egestas ornare vel volutpat.
                                </div>
                                <button className="comments__reply" type="button">ответить</button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default PostTest;