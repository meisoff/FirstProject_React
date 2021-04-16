import React, {Component} from 'react';
import HashLoader from "@bit/davidhu2000.react-spinners.hash-loader";
import s from './Preloader.module.css'

class Preloader extends Component {

    render() {
        return (
            <div className={s.preloader__wrapper}>
                <div className={s.preloader__item}>
                    <HashLoader size='80' color='#3137C9'/>
                </div>
            </div>
        )
    }
}

export default Preloader;

