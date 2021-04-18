import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserData} from "../../redux/reducers/authUserReducer";
import * as axios from "axios";

class HeaderContainer extends React.Component {

    componentDidMount() {
        return axios.get(`https://social-network.samuraijs.com/api/1.1/auth/me`, {
            withCredentials: true
        })
            .then (response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                }
            })
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
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);