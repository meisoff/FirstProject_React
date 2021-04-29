import React from "react";
import {connect} from "react-redux";
import {getAuthUserInfo, putUserPhoto, updateUserFullInfo} from "../../redux/reducers/authUserReducer";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <h1 className="page__title">Профиль</h1>

            <div className="form">
                <div className="cabinet">
                    <ProfileInfo isDisabled={props.isDisabled} userInfo={props.userInfos} updateUserFullInfo={props.updateUserFullInfo} />
                    <div className="cabinet__avatar">
                        {!!props.userInfos.photos.large ? <img src={props.userInfos.photos.large} alt="avatar"/> : <img src="http://placehold.it/150" alt="avatar"/>}

                        <label className="cabinet__file">
                            <input type="file" onChange={props.putUserPhoto}/>
                            выбрать аватар
                        </label>
                    </div>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myId: state.auth.userId,
        userInfos: state.auth.userInfo,
        isDisabled: state.auth.isButtonDisabled
    }
}

export default connect(mapStateToProps, {putUserPhoto, getAuthUserInfo, updateUserFullInfo})(Profile)