import React, {Component} from 'react';
import SignUp from "./SignUp";
import {connect} from "react-redux";

class SignUpContainer extends Component {
    render() {
        return (
            <SignUp />
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {})(SignUpContainer);