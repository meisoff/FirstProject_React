import React, {Component} from 'react';
import {connect} from "react-redux";
import Social from "./Social";
import Following from "./Following";
import Followers from "./Followers";
import {getUsers, userFollow, userUnfollow} from "../../redux/reducers/userReducer";
import {authLoginLength} from "../Header/AuthUser";
import baseUserAvatar from "../../images/user_photo.png";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class SocialContainer extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    separateFunc = (array) => {
        let result = [];
        let collected = [];
        array.forEach(item => {
            collected.push(item);
            if (collected.length === 4) {
                result.push(collected);
                collected = [];
            }
        });

        return result;
    }

    generateFollowItem = (array) => {
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
                            <button disabled={this.props.isButtonDisabled.some(id => id === element.id)} className="follow__button follow__button--active"
                                    onClick={() => {this.props.userUnfollow(element.id)}}>Подписка</button>
                        ) : (
                            <button disabled={this.props.isButtonDisabled.some(id => id === element.id)} className="follow__button"
                                    onClick={() => {this.props.userFollow(element.id)}}>Подписаться</button>
                        )}
                    </li>
                )
            })
        )
    }

    setColumnOfUsers = (array, element) => {
        if (this.props.users.length !== 0) {
            let result = this.separateFunc(array);
            return this.generateFollowItem(result[element])
        }
    }

    render() {
        return (
            <div className="social__body">
                <h1 className="page__title">Сообщество</h1>

                <div className="social__follow">
                    <div className="social__follow-item  social__follow-item--left">
                        <Following/>
                    </div>

                    <div className="social__follow-item  social__follow-item--right">
                        <Followers/>
                    </div>
                </div>

                <div className="social__search">
                    <Social columnOne={this.setColumnOfUsers(this.props.users, 0)}
                            columnTwo={this.setColumnOfUsers(this.props.users, 1)}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersFirstInfo.users,
        isButtonDisabled: state.usersFirstInfo.isButtonDisabled,
    }
}
let AuthRedirectComponent = withAuthRedirect(SocialContainer);

export default connect(mapStateToProps, {getUsers, userUnfollow, userFollow})(AuthRedirectComponent);