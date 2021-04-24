import React, {Component} from 'react';
import {connect} from "react-redux";
import SignIn from "./SignIn";
import {loginUser} from "../../redux/reducers/authUserReducer";
import {compose} from "redux";
import {redirectAuthUsers} from "../../hoc/withAuthRedirect";

class SignInContainer extends Component {
    render() {
        return (
            <SignIn isDisabled={this.props.isDisabled} isErrorSignIn={this.props.isErrorSignIn} loginUser={this.props.loginUser} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isErrorSignIn: state.auth.isErrorSignIn,
        isDisabled: state.auth.isButtonDisabled
    }
}

export default compose(connect(mapStateToProps, {loginUser}), redirectAuthUsers)(SignInContainer)