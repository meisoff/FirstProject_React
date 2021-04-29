import {profileAPI, usersAPI} from "../../api/api";
import store from "../redux-store";
import {isFetchingUpdate} from "./isFetchingReducer";

const USERS_FOLLOW_TOGGLE = "USERS_FOLLOW_TOGGLE";
const USERS_SET_USERS = "USERS_SET_USERS";
const USERS_BUTTON_DISABLE_TOGGLE = "USERS_BUTTON_DISABLE_TOGGLE";
const USERS_SET_STATUS = "USERS_SET_STATUS";
const USERS_SET_FOLLOWING = "USERS_SET_FOLLOWING";
const USERS_SET_PHOTOS = "USERS_SET_PHOTOS";

let initialState = {
    users: [],
    following: [],
    isButtonDisabled: [],
    status: "",
    aboutMe: "",
    contacts: null,
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_FOLLOW_TOGGLE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    } else return u;
                }),
                following: state.following.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    } else return u;
                })
            }
        case USERS_SET_USERS:
            return {...state, users: action.users}
        case USERS_SET_FOLLOWING:
            return {...state, following: action.following}
        case USERS_BUTTON_DISABLE_TOGGLE:
            return {
                ...state, isButtonDisabled: action.isButtonDisabled
                    ? [...state.isButtonDisabled, action.userId]
                    : [...state.isButtonDisabled.filter(id => id !== action.userId)]
            }
        case USERS_SET_STATUS:
            return {
                ...state, status: action.status,
            }
        case USERS_SET_PHOTOS:
            return {
                ...state,
            }

        default:
            return state;
    }
}
export const setUsers = (users) => {
    return {
        type: USERS_SET_USERS, users
    }
}
export const setFollowing = (following) => {
    return {
        type: USERS_SET_FOLLOWING, following
    }
}
export const followToggle = (userId) => {
    return {
        type: USERS_FOLLOW_TOGGLE, userId
    }
}
export const buttonDisableToggle = (state, userId) => {
    return {type: USERS_BUTTON_DISABLE_TOGGLE, state, userId}
}

export const setStatusAC = (status) => {
    return {type: USERS_SET_STATUS, status}
}
export const setUsersPhotos = (photos, userId) => {
    return {type: USERS_SET_PHOTOS, photos, userId}
}


export const getUsers = (count) => {
    return (dispatch) => {
        if (store.getState().usersInfo.users.length === 0) {
            dispatch(isFetchingUpdate(true))
            usersAPI.getUsers(count)
                .then(data => {
                    dispatch(setUsers(data.items));
                })
            dispatch(isFetchingUpdate(false))
        }
    }
}

export const getUserPhoto = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    if (response.data.resultCode === 0) {
        dispatch(setUsersPhotos(response.data.data.photos, userId))
    }
}

export const getFollowing = (count, page, friend) => async (dispatch) => {
    if (store.getState().usersInfo.following.length === 0) {
        dispatch(isFetchingUpdate(true))
        let data = await usersAPI.getFollowing(count, page, friend)
        dispatch(setFollowing(data.items));
    }
    if (store.getState().usersInfo.following.length === 4) {
        dispatch(isFetchingUpdate(true))
        let data = await usersAPI.getFollowing(count, page, friend)
        dispatch(setFollowing(data.items));
    }
    dispatch(isFetchingUpdate(false))
}

export const userUnfollow = (id) => async (dispatch) => {
    dispatch(buttonDisableToggle(true, id));
    let data = await usersAPI.deleteFollow(id)

    if (data.resultCode === 0) {
        dispatch(followToggle(id));
    }
    dispatch(buttonDisableToggle(false, id));
}
export const userFollow = (id) => async (dispatch) => {
    dispatch(buttonDisableToggle(true, id));
    let data = await usersAPI.postFollow(id)

    if (data.resultCode === 0) {
        dispatch(followToggle(id));
    }
    dispatch(buttonDisableToggle(false, id));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)

    dispatch(setStatusAC(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }

}

export default userReducer;