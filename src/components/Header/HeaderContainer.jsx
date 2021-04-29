import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthUserData, getAuthUserInfo, logoutUser, setAuthUserData} from "../../redux/reducers/authUserReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userInfo === this.props.userInfo) {
            if (this.props.isAuth) {
                this.props.getAuthUserInfo(this.props.userId);
            }
        }
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId,
        userInfo: state.auth.userInfo,
    }
}

export default connect(mapStateToProps, {setAuthUserData, logoutUser, getAuthUserData, getAuthUserInfo})(HeaderContainer);