import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {

    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/signin" />
            
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps)(RedirectComponent);
}

export const redirectAuthUsers = (Component) => {
    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    class AuthUserComponent extends React.Component {
        render() {
            if (this.props.isAuth) return <Redirect to="/" />

            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps)(AuthUserComponent);
}