import React from "react";
import NavLeft from "./NavLeft";
import AuthUser from "./AuthUser";
import Burger from "./Burger";
import Search from "./Search";
import NoneAuthUser from "./NoneAuthUser";

const Header = (props) => {
    return (
    <header className="header">
        <div className="header__left">
            <NavLeft />
            <Burger />
        </div>
        <div className="header__right">
            {props.isAuth ? <AuthUser avatar={props.userInfo.photos.small} logoutUser={props.logoutUser} login={props.login}/> : <NoneAuthUser />}
            <Search />
        </div>

    </header>
    )
}


export default Header;