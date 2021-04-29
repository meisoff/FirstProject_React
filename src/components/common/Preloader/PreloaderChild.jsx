import React, {Component} from 'react';
import HashLoader from "@bit/davidhu2000.react-spinners.hash-loader";

class PreloaderChild extends Component {

    render() {
        return (
            <div className="preloader__wrapper">
                <div className="preloader__item">
                    <HashLoader size={80} color='#3137C9'/>
                </div>
            </div>
        )
    }
}

export default PreloaderChild;

