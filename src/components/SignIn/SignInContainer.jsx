import React, {Component} from 'react';
import {connect} from "react-redux";
import SignIn from "./SignIn";

class SignInContainer extends Component {
    render() {
        return (
            <SignIn />
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {})(SignInContainer);