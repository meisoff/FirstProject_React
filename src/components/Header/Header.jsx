import React from "react";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import Burger from "./Burger";
import Search from "./Search";

const Header = () => {
    return (
    <header className="header">
        <div className="header__left">
            <NavLeft />
            <Burger />
        </div>
        <div className="header__right">
            <NavRight />
            <Search />
        </div>

    </header>
    )
}

export default Header;