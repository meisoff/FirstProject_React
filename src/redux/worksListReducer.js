import Post1nd from "../images/works/1nd_page.jpg";
import Post2nd from "../images/works/2nd_page.jpg";

const WORKS_LIST = 'WORKS-LIST';

let initialState = [
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

const worksListReducer = (state = initialState, action) => {
    switch (action.type) {
        case WORKS_LIST:
            return state;
        default:
            return state;
    }
}

export default worksListReducer;