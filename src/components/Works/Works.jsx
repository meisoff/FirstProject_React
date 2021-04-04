import React from 'react';
import WorksItem from "./WorksItem";

const Works = (props) => {

    let worksElements =
        props.works.map(element => {
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