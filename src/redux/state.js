import Post2 from "../images/post-2.jpg";
import Post3 from "../images/post-3.jpg";
import Post1nd from "../images/works/1nd_page.jpg";
import Post2nd from "../images/works/2nd_page.jpg";
import {rerenderEntireTree} from "../render";

let state = {
    posts: [
        {
            link: "/posts/1",

            content:{
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora totam dolor distinctio nihil sed itaque illum amet commodi quasi cumque facilis nesciunt iusto, excepturi mollitia molestias voluptatibus recusandae ea."
            },

            footer:{
                date: "14.02.2021",
                dateTime: "2021-02-14 12:26"
            }
        },

        {
            header: {
                image: Post2,
                alt: 'Как писать код быстро и безболезненно?'
            },

            link: "/posts/2",

            content: {
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora totam dolor distinctio nihil sed itaque illum amet commodi quasi cumque facilis nesciunt iusto, excepturi mollitia molestias voluptatibus recusandae ea.",
                title: "Как писать код быстро и безболезненно?"
            },

            footer: {
                date: "14.02.2021",
                dateTime: "2021-02-14 12:26"
            }

        },

        {
            header: {
                video: 'https://www.youtube.com/embed/p4zbV1MBJNs'
            },

            link: "/posts/3",

            content: {
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora totam dolor distinctio nihil sed itaque illum amet commodi quasi cumque facilis nesciunt iusto, excepturi mollitia molestias voluptatibus recusandae ea.",
                title: "Купил новый ноутбук за 150 000 руб"
            },

            footer: {
                date: "14.02.2021",
                dateTime: "2021-02-14 12:26"
            }
        },

        {
            header:{
                image: Post3,
                alt: 'Как я сходил на FrontEnd Conf 2021'
            },

            link: "/posts/4",

            content:{
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora totam dolor distinctio nihil sed itaque illum amet commodi quasi cumque facilis nesciunt iusto, excepturi mollitia molestias voluptatibus recusandae ea.",
                title: "Как я сходил на FrontEnd Conf 2021"
            },

            footer:{
                date: "14.02.2021",
                dateTime: "2021-02-14 12:26"
            }
        }
    ],
    worksList: [
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
    ],
    newPostDescription: ''
}

export let addPost = () => {

    let fullDate = new Date();

    let date = function (date) {
        if (date < 10) {
            return '0'+ date;
        } else {
            return date;
        }
    }

    let newPost = {
        link: "/posts/12",

        content: {
            description: state.newPostDescription,
        },

        footer: {
            date: date(fullDate.getDate()) + '.' + date(fullDate.getMonth()) + '.' + fullDate.getFullYear(),
            dateTime: date(fullDate.getDate()) + '-' + date(fullDate.getMonth()) + '-' + fullDate.getFullYear() + ' ' + fullDate.getHours() + ':' + fullDate.getMinutes()
        }
    }

    state.newPostDescription = '';
    state.posts.unshift(newPost);
    rerenderEntireTree(state);
}


export let updateNewPostText = (postMessage) => {
    state.newPostDescription = postMessage;
    rerenderEntireTree(state);
}

export default state;
