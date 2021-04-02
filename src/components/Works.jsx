import React from 'react';
import Post1nd from '../images/works/1nd_page.jpg';
import Post2nd from '../images/works/2nd_page.jpg';

const Works = () => {
    return (
        <div>
            <h1 className="page__title">Мои работы</h1>

            <article className="work">
                <div className="work__preview">
                    <picture>
                        <source srcSet="http://placehold.it/700x200" media="(max-width: 700px)"/>
                        <img src={Post1nd} alt="1nd page"/>
                    </picture>
                </div>
                <div className="work__content">
                    <h2 className="work__title">
                        <a href="/#" target="_blank">altermono.com</a>
                    </h2>
                    <div className="work__description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit.
                            Sagittis porttitor orci auctor in at tincidunt arcu egestas.
                            Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa.
                            Egestas ornare vel volutpat.
                        </p>
                    </div>
                    <ul className="tags">
                        <li className="tags__item">дизайн</li>
                        <li className="tags__item">создание сайта</li>
                        <li className="tags__item">SMM</li>
                    </ul>
                    <div className="work__footer">
                        <a className="btn btn--blue btn--rounded btn--small" href="/#" target="_blank">Перейти на
                            сайт</a>
                    </div>
                </div>
            </article>

            <article className="work">
                <div className="work__preview">
                    <picture>
                        <source srcSet="http://placehold.it/700x200" media="(max-width: 700px)"/>
                        <img src={Post2nd} alt="2nd page"/>
                    </picture>
                </div>
                <div className="work__content">
                    <h2 className="work__title">
                        <a href="/#" target="_blank">codedoco.com</a>
                    </h2>
                    <div className="work__description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit.
                            Sagittis porttitor orci auctor in at tincidunt arcu egestas.
                        </p>
                    </div>
                    <ul className="tags">
                        <li className="tags__item">дизайн</li>
                        <li className="tags__item">создание сайта</li>
                        <li className="tags__item">SMM</li>
                    </ul>
                    <div className="work__footer">
                        <a className="btn btn--blue btn--rounded btn--small" href="/#" target="_blank">Перейти на
                            сайт</a>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Works;