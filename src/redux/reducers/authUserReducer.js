import {authAPI, profileAPI} from "../../api/api";
import store from "../redux-store";

const AUTH_SET_USER_DATA = "AUTH_SET_USER_DATA";
const AUTH_SET_ERROR = "AUTH_SET_ERROR";
const AUTH_SET_STATE_BUTTON = "AUTH_SET_STATE_BUTTON";
const AUTH_UPDATE_INFO = "AUTH_UPDATE_INFO";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    userInfo: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: ""
        },
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        userId: "",
        photos: {
            small: null,
            large: null
        }
    },
    isErrorSignIn: false,
    isButtonDisabled: false
}

const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case AUTH_SET_ERROR:
            return {
                ...state,
                isErrorSignIn: action.isErrorSignIn
            }
        case AUTH_SET_STATE_BUTTON:
            return {
                ...state,
                isButtonDisabled: action.isButtonDisabled
            }
        case AUTH_UPDATE_INFO:
            return {
                ...state,
                userInfo: {
                    aboutMe: action.data.aboutMe,
                    contacts: {
                        facebook: action.data.contacts.facebook,
                        website: action.data.contacts.website,
                        vk: action.data.contacts.vk,
                        twitter: action.data.contacts.twitter,
                        instagram: action.data.contacts.instagram,
                        youtube: action.data.contacts.youtube,
                        github: action.data.contacts.github,
                        mainLink: action.data.contacts.mainLink
                    },
                    lookingForAJob: action.data.lookingForAJob,
                    lookingForAJobDescription: action.data.lookingForAJobDescription,
                    fullName: action.data.fullName,
                    userId: action.data.userId,
                    photos: {
                        small: action.data.photos.small,
                        large: action.data.photos.large
                    }
                }
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: AUTH_SET_USER_DATA, data: {userId, email, login, isAuth}
    }
}

export const setAuthUserInfo = (data) => {
    return {
        type: AUTH_UPDATE_INFO, data
    }
}

export const setErrorSignIn = (isErrorSignIn) => {
    return {
        type: AUTH_SET_ERROR, isErrorSignIn: isErrorSignIn
    }
}

export const setStateButton = (isButtonDisabled) => {
    return {
        type: AUTH_SET_STATE_BUTTON, isButtonDisabled: isButtonDisabled
    }
}

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true))
    }

}

export const getAuthUserInfo = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    if (response.data.userId === userId) {
        dispatch(setAuthUserInfo(response.data))
    }
}

export const putUserPhoto = async (photoFile) => {
    await profileAPI.setPhotos(photoFile.target.files[0]);
    getAuthUserInfo(store.getState().auth.userId)
}

export const logoutUser = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
    dispatch(setStateButton(true))
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
        dispatch(setErrorSignIn(false))
    } else if (response.data.resultCode === 1) {
        dispatch(setErrorSignIn(true))
    }
    dispatch(setStateButton(false))
}


export const updateUserFullInfo = (data) => async (dispatch) => {
    dispatch(setStateButton(true))
    let resultData = {
        aboutMe: data.aboutMe,
        contacts: {
            facebook: data.facebook,
            website: data.website,
            vk: data.vk,
            twitter: data.twitter,
            instagram: data.instagram,
            youtube: data.youtube,
            github: data.github,
            mainLink: data.mainLink
        },
        lookingForAJob: data.lookingForAJob,
        lookingForAJobDescription: data.lookingForAJobDescription,
        fullName: data.fullName,
        userId: data.userId,
    }

    let response = await profileAPI.putProfileInfo(resultData);

    if (response.data.resultCode === 0) {
        alert("Изменения успешно сохранены");
        getAuthUserInfo(store.getState().auth.userId);
    }
    dispatch(setStateButton(false))
}

export default authUserReducer;