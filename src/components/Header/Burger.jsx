import React, {useState} from "react";

const Burger = () => {
    const [toggleMenu, setToggle] = useState(true);

    if (toggleMenu) {
        document.body.classList.add('show-sidebar');
    }
    else {
        document.body.classList.remove('show-sidebar');
    }

    return (
        (toggleMenu) ? <button onClick={() => {setToggle(false)}} className="burger show-sidebar" type="button" id="sidebarToggle">
            <span>Закрыть навигацию</span>
        </button> : <button onClick={() => {setToggle(true)}} className="burger" type="button" id="sidebarToggle">
            <span>Открыть навигацию</span>
        </button>
    )
}

export default Burger;
