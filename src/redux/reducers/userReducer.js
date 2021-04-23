import {profileAPI, usersAPI} from "../../api/api";
import store from "../redux-store";

const FOLLOW_TOGGLE = "FOLLOW_TOGGLE";
const SET_USERS = "SET_USERS";
const BUTTON_DISABLE_TOGGLE = "BUTTON_DISABLE_TOGGLE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    users: [],
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
        case FOLLOW_TOGGLE:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    } else return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case BUTTON_DISABLE_TOGGLE:
            return {
                ...state, isButtonDisabled: action.isButtonDisabled
                    ? [...state.isButtonDisabled, action.userId]
                    : [...state.isButtonDisabled.filter(id => id !== action.userId)]
            }
        case SET_STATUS:
            return {
                ...state, status: action.status,
            }

        default:
            return state;
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS, users
    }
}
export const followToggle = (userId) => {
    return {
        type: FOLLOW_TOGGLE, userId
    }
}
export const buttonDisableToggle = (state, userId) => {
    return {type: BUTTON_DISABLE_TOGGLE, state, userId}
}
export const getUsers = () => {
    return (dispatch) => {
        if (store.getState().usersInfo.users.length === 0) {
            usersAPI.getUsers()
                .then(data => {
                    dispatch(setUsers(data.items));
                })
        }
    }
}
export const userUnfollow = (id) => {
    return (dispatch) => {
        dispatch(buttonDisableToggle(true, id));
        usersAPI.deleteFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followToggle(id));
                }
                dispatch(buttonDisableToggle(false, id));
            })
    }
}
export const userFollow = (id) => {
    return (dispatch) => {
        dispatch(buttonDisableToggle(true, id));
        usersAPI.postFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followToggle(id));
                }
                dispatch(buttonDisableToggle(false, id));
            })
    }
}
export const setStatusAC = (status) => {
    return {type: SET_STATUS, status}
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusAC(response.data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })

}

export default userReducer;