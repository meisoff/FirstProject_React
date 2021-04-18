import Post2 from "../../images/post-2.jpg";
import Post3 from "../../images/post-3.jpg";
import store from "../redux-store";
import PostTest from "../../components/Posts/PostTest";

const ADD_POST = 'ADD-POST';
const ADD_ARTICLE = 'ADD_ARTICLE';
const SEPARATE = 'SEPARATE';

let category = {
    site: 'Создание сайтов',
    marketing: 'Интернет-маркетинг',
    video: 'Продвижение видео',
}

let initialState = [
    {
        content: {
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora totam dolor distinctio nihil sed itaque illum amet commodi quasi cumque facilis nesciunt iusto, excepturi mollitia molestias voluptatibus recusandae ea.",
        },

        footer: {
            date: "14.02.2021",
            dateTime: "2021-02-14 12:26"
        },

        key: 4,
    },

    {
        header: {
            image: Post2,
            alt: 'Как писать код быстро и безболезненно?'
        },

        link: "/posts/2",

        content: {
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora totam dolor distinctio nihil sed itaque illum amet commodi quasi cumque facilis nesciunt iusto, excepturi mollitia molestias voluptatibus recusandae ea.",
            title: "Как писать код быстро и безболезненно?",
            testPage: PostTest()
        },

        footer: {
            date: "14.02.2021",
            dateTime: "2021-02-14 12:26"
        },

        category: category.site,
        key: 3,
    },

    {
        header: {
            video: 'https://www.youtube.com/embed/p4zbV1MBJNs'
        },

        link: "/posts/3",

        content: {
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora totam dolor distinctio nihil sed itaque illum amet commodi quasi cumque facilis nesciunt iusto, excepturi mollitia molestias voluptatibus recusandae ea.",
            title: "Купил новый ноутбук за 150 000 руб",
            testPage: PostTest()
        },

        footer: {
            date: "14.02.2021",
            dateTime: "2021-02-14 12:26"
        },

        category: category.video,
        key: 2,
    },

    {
        header: {
            image: Post3,
            alt: 'Как я сходил на FrontEnd Conf 2021'
        },

        link: "/posts/4",

        content: {
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora totam dolor distinctio nihil sed itaque illum amet commodi quasi cumque facilis nesciunt iusto, excepturi mollitia molestias voluptatibus recusandae ea.",
            title: "Как я сходил на FrontEnd Conf 2021",
            testPage: PostTest()
        },

        footer: {
            date: "14.02.2021",
            dateTime: "2021-02-14 12:26"
        },

        category: category.marketing,
        key: 1,
    }
];

const postsReducer = (state = initialState, action) => {

    let fullDate = new Date();
    let date = (date) => {
        if (date < 10) {
            return '0' + date;
        } else {
            return date;
        }
    }
    let footer = () => {
        return {
            date: date(fullDate.getDate()) + '.' + date(fullDate.getMonth()) + '.' + fullDate.getFullYear(),
            dateTime: date(fullDate.getDate()) + '-' + date(fullDate.getMonth()) + '-' + fullDate.getFullYear() + ' ' + fullDate.getHours() + ':' + fullDate.getMinutes()
        }

    }

    switch (action.type) {
        case ADD_POST:
            return [{
                content: {
                    description: action.description,
                },
                key: state.length + 1,
                footer: footer()
            }, ...state]
        case ADD_ARTICLE:
            return [
                {
                    header: {
                        image: action.createArticle.image,
                        alt: action.createArticle.title
                    },

                    link: `/posts/${state.length + 1}`,

                    key: state.length + 1,

                    content: {
                        description: action.createArticle.description,
                        title: action.createArticle.title,
                        html: action.createArticle.html
                    },

                    footer: footer(),

                    category: action.createArticle.category
                }, ...state]
        case SEPARATE:
            return { ...action.array}
        default:
            return state;
    }
}

export const addPostCreate = () => {
    return {type: ADD_POST, description: store.getState().newPostDescription}
}

export const separateFunc = (array) => {
    let result = [];

    let collected = [];
    array.forEach(item => {
        collected.push(item);
        if (collected.length === store.getState().paginationList.pageSize) {
            result.push(collected);
            collected = [];
        }
    });

    if (collected.length > 0) {
        result.push(collected);
    }

    return result;
}

export const separate = (array) => {
    return {type: SEPARATE, array}
}

export default postsReducer;