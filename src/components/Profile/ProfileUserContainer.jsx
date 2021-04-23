import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getStatus, updateStatus} from "../../redux/reducers/userReducer";
import ProfileUser from "./ProfileUser";

class ProfileUserContainer extends React.Component {

    componentDidMount() {
        this.props.getStatus(this.props.authId);
    }

    render() {
        return (
            <ProfileUser updateStatus={this.props.updateStatus} status={this.props.status}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.usersInfo.status,
        isAuth: state.auth.isAuth,
        authId: state.auth.userId
    }
}


export default compose(connect(mapStateToProps, {getStatus, updateStatus}))(ProfileUserContainer);