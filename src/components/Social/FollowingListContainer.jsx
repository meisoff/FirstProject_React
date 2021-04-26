import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {getFollowing, getUsers, userFollow, userUnfollow} from "../../redux/reducers/userReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import FollowingList from "./FollowingList";
import baseUserAvatar from "../../images/user_photo.png";
import {authLoginLength} from "../Header/AuthUser";

const FollowingListContainer = (props) => {

    let separateFunc = (array) => {
        let result = [];
        let collected = [];
        array.forEach(item => {
            collected.push(item);
            if (collected.length === Math.ceil(array.length / 2)) {
                result.push(collected);
                collected = [];
            }
        }
    );
        result.push(collected);
        return result;
    }

    const generateFollowItem = (array) => {
        return (
            array.map(element => {
                let key = element.id;
                return (
                    <li className="follow__item" key={key}>

                        {(element.photos.small != null ? <div className="follow__item-img"
                                                              style={{backgroundImage: `url(${element.photos.small})`}}/> :
                            <img className="follow__item-img" src={baseUserAvatar} alt="BaseImg"/>)}

                        <div className="follow__item-login">{authLoginLength(element.name)}</div>

                        {element.followed ? (
                            <button disabled={props.isButtonDisabled.some(id => id === element.id)}
                                    className="follow__button follow__button--active"
                                    onClick={() => {
                                        props.userUnfollow(element.id)
                                    }}>Подписка</button>
                        ) : (
                            <button disabled={props.isButtonDisabled.some(id => id === element.id)}
                                    className="follow__button"
                                    onClick={() => {
                                        props.userFollow(element.id)
                                    }}>Подписаться</button>
                        )}
                    </li>
                )
            })
        )
    }

    let setColumnOfFollowers = (array) => {
        if (props.following.length !== 0) {
            separateFunc(array)
            return generateFollowItem(array)
        }
    }

    return (
        <div className="social__search">
            <FollowingList columnOne={setColumnOfFollowers(props.following, 1)}
                    columnTwo={setColumnOfFollowers(props.following, 2)}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersInfo.users,
        following: state.usersInfo.following,
        isButtonDisabled: state.usersInfo.isButtonDisabled,
    }
}

export default compose(
    connect(mapStateToProps, {getUsers, userUnfollow, userFollow, getFollowing}),
    withAuthRedirect
)(FollowingListContainer)