import React, {Component} from 'react';
import SignUp from "./SignUp";
import {connect} from "react-redux";
import {compose} from "redux";
import {redirectAuthUsers} from "../../hoc/withAuthRedirect";

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

export default compose(connect(mapStateToProps, {}), redirectAuthUsers)(SignUpContainer)