import React from 'react';
import Post1nd from '../../images/works/1nd_page.jpg';
import Post2nd from '../../images/works/2nd_page.jpg';
import WorksItem from "./WorksItem";

const Works = () => {

    let worksList = [
        {
            preview: {
                smallImage: "http://placehold.it/700x200",
                bigImage: Post1nd,
                alt: 'altermono.com'
            },

            content: {
                title: 'altermono.com',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
                tags: ['дизайн', 'создание сайта', 'SMM']
            },

            link: '/#'

        },

        {
            preview: {
                smallImage: "http://placehold.it/700x200",
                bigImage: Post2nd,
                alt: 'codedoco.com'
            },

            content: {
                title: 'codedoco.com',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
                tags: ['дизайн', 'создание сайта', 'SMM']
            },

            link: '/#'
        }
    ];

    let worksElements =
        worksList.map(element => {
            return <WorksItem preview={element.preview} content={element.content} link={element.link} />
        });

    return (
        <div>
            <h1 className="page__title">Мои работы</h1>
            { worksElements }
        </div>
    )
}

export default Works;