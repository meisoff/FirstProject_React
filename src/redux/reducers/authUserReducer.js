import {authAPI} from "../../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_ERROR = "SET_ERROR";
const SET_STATE_BUTTON = "SET_STATE_BUTTON"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isErrorSignIn: false,
    isButtonDisabled: false
}

const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case SET_ERROR:
            return {
                ...state,
                isErrorSignIn: action.isErrorSignIn
            }
        case SET_STATE_BUTTON:
            return {
                ...state,
                isButtonDisabled: action.isButtonDisabled
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA, data: {userId, email, login, isAuth}
    }
}

export const setErrorSignIn = (isErrorSignIn) => {
    return {
        type: SET_ERROR, isErrorSignIn: isErrorSignIn
    }
}

export const setStateButton = (isButtonDisabled) => {
    return {
        type: SET_STATE_BUTTON, isButtonDisabled: isButtonDisabled
    }
}

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const logoutUser = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export const loginUser = (email, password, rememberMe) => (dispatch) => {
    dispatch(setStateButton(true))
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
                dispatch(setErrorSignIn(false))
            } else if (response.data.resultCode === 1) {
                dispatch(setErrorSignIn(true))
            }
            dispatch(setStateButton(false))
        })
}


export default authUserReducer;