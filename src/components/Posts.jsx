import React from "react";
import Post2 from "../images/post-2.jpg";
import Post3 from "../images/post-3.jpg";
import {NavLink} from "react-router-dom";
import PostItem from "./PostItem";


const Posts = () => {

    let posts = [
        {
            link: "/posts/1",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora totam dolor distinctio nihil sed itaque illum amet commodi quasi cumque facilis nesciunt iusto, excepturi mollitia molestias voluptatibus recusandae ea.",
            date: "14.02.2021",
            dateTime: "2021-02-14 12:26"
        },

        {
            image: Post2,
            alt: 'Как писать код быстро и безболезненно?',
            link: "/posts/2",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora totam dolor distinctio nihil sed itaque illum amet commodi quasi cumque facilis nesciunt iusto, excepturi mollitia molestias voluptatibus recusandae ea.",
            title: "Как писать код быстро и безболезненно?",
            date: "14.02.2021",
            dateTime: "2021-02-14 12:26",
        },

        {
            video: 'https://www.youtube.com/embed/p4zbV1MBJNs',
            link: "/posts/3",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora totam dolor distinctio nihil sed itaque illum amet commodi quasi cumque facilis nesciunt iusto, excepturi mollitia molestias voluptatibus recusandae ea.",
            title: "Купил новый ноутбук за 150 000 руб",
            date: "14.02.2021",
            dateTime: "2021-02-14 12:26",
        },

        {
            image: Post3,
            alt: 'Как я сходил на FrontEnd Conf 2021',
            link: "/posts/4",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora totam dolor distinctio nihil sed itaque illum amet commodi quasi cumque facilis nesciunt iusto, excepturi mollitia molestias voluptatibus recusandae ea.",
            title: "Как я сходил на FrontEnd Conf 2021",
            date: "14.02.2021",
            dateTime: "2021-02-14 12:26",
        }
    ];

    let postElements =
        /*posts.map(element => {/!*if (element.hasOwnProperty('image')) {
                return <PostItem image={element.image} alt={element.alt} link={element.link} description={element.description} title={element.title} date={element.date} dateTime={element.dateTime}/>
            } else if (element.hasOwnProperty('video')) {
                return <PostItem video={element.video} link={element.link} description={element.description} title={element.title} date={element.date} dateTime={element.dateTime}/>
            } else {
                return <PostItem link={element.link} description={element.description} date={element.date} dateTime={element.dateTime} />
            }*!/});*/
        posts.map(element => <PostItem image={element.image} alt={element.alt} link={element.link} description={element.description} title={element.title} date={element.date} dateTime={element.dateTime} video={element.video} />)
    return (
        <div>
            {postElements}
        </div>
    )

    /*return (
        <PostItem header={{image: Post2, alt: 'Как писать код быстро и безболезненно?'}} link={"/posts/2"} content={{
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora totam dolor distinctio nihil sed itaque illum amet commodi quasi cumque facilis nesciunt iusto, excepturi mollitia molestias voluptatibus recusandae ea.",
            title: "Как писать код быстро и безболезненно?"
        }} footer={{
            date: "14.02.2021",
            dateTime: "2021-02-14 12:26"
        }}/>
    )*/
}

export default Posts;