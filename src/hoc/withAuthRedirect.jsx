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

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent;
}