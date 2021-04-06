import store from "./store";
import Post2 from "../images/post-2.jpg";
import Post3 from "../images/post-3.jpg";
const ADD_POST = 'ADD-POST';

let initialState = [
    {
        link: "/posts/1",

        content: {
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora totam dolor distinctio nihil sed itaque illum amet commodi quasi cumque facilis nesciunt iusto, excepturi mollitia molestias voluptatibus recusandae ea."
        },

        footer: {
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
        header: {
            image: Post3,
            alt: 'Как я сходил на FrontEnd Conf 2021'
        },

        link: "/posts/4",

        content: {
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora totam dolor distinctio nihil sed itaque illum amet commodi quasi cumque facilis nesciunt iusto, excepturi mollitia molestias voluptatibus recusandae ea.",
            title: "Как я сходил на FrontEnd Conf 2021"
        },

        footer: {
            date: "14.02.2021",
            dateTime: "2021-02-14 12:26"
        }
    }
];

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let fullDate = new Date();

            let date = function (date) {
                if (date < 10) {
                    return '0' + date;
                } else {
                    return date;
                }
            }

            let newPost = {
                link: "/posts/12",

                content: {
                    description: action.description,
                },

                footer: {
                    date: date(fullDate.getDate()) + '.' + date(fullDate.getMonth()) + '.' + fullDate.getFullYear(),
                    dateTime: date(fullDate.getDate()) + '-' + date(fullDate.getMonth()) + '-' + fullDate.getFullYear() + ' ' + fullDate.getHours() + ':' + fullDate.getMinutes()
                }
            }

            state.unshift(newPost);
            return state;
        default:
            return state;
    }
}

export const addPostCreate = () => {
    return { type: ADD_POST, description: store.getState().newPostDescription }
}

export default postsReducer;