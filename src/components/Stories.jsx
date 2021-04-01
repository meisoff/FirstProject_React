import React from "react";
import Stories1 from "../images/stories/stories-1.jpg";
import Stories2 from "../images/stories/stories-2.jpg";
import Stories3 from "../images/stories/stories-3.jpg";
import Stories4 from "../images/stories/stories-4.jpg";


const Stories = () => {
    return (
    <div className="stories">
        <div className="stories__item" data-modal="story-modal">
            <img className="stories__preview" src={Stories1} alt="" />
                <div className="stories__title">Отдыхаю на природе</div>
                <time className="stories__date" dateTime="2021-02-23 16:54">23.02.2021</time>
        </div>
        <div className="stories__item" data-modal="story-modal">
            <img className="stories__preview" src={Stories2} alt="" />
                <div className="stories__title">Заканчиваю
                    сложный проект
                </div>
                <time className="stories__date" dateTime="2021-02-20 16:54">20.02.2021</time>
        </div>
        <div className="stories__item" data-modal="story-modal">
            <img className="stories__preview" src={Stories3} alt="" />
                <div className="stories__title">Переехал в новую
                    квартиру
                </div>
                <time className="stories__date" dateTime="2021-02-15 16:54">15.02.2021</time>
        </div>
        <div className="stories__item" data-modal="story-modal">
            <img className="stories__preview" src={Stories4} alt="" />
                <div className="stories__title">Осень ушла!</div>
                <time className="stories__date" dateTime="2021-02-06 16:54">06.02.2021</time>
        </div>
    </div>
    )
}

export default Stories;