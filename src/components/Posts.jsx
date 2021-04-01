import React from "react";
import Post2 from "../images/post-2.jpg";
import Post3 from "../images/post-3.jpg";


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
                    <a href="post.html">
                        <img className="post__preview" src={Post2}
                             alt="Как писать код быстро и безболезненно?" />
                    </a>
                </div>
                <div className="post__content">
                    <h2 className="post__title">
                        <a href="post.html">Как писать код быстро и безболезненно?</a>
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

                    <a className="post__read" href="post.html">читать</a>
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
                        <a href="post.html">Купил новый ноутбук за 150 000 руб</a>
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

                    <a className="post__read" href="post.html">оставить комментарий</a>
                </div>
            </article>

            <article className="post">
                <div className="post__header post__header--preview">
                    <a href="post.html">
                        <img className="post__preview" src={Post3}
                             alt="Как я сходил на FrontEnd Conf 2021" />
                    </a>
                </div>
                <div className="post__content">
                    <h2 className="post__title">
                        <a href="post.html">Как я сходил на FrontEnd Conf 2021</a>
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

                    <a className="post__read" href="post.html">читать</a>
                </div>
            </article>
        </div>
    )
}

export default Posts;