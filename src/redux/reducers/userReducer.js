const FOLLOW_TOGGLE = "FOLLOW_TOGGLE";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [ ],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_TOGGLE:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    else return u;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }
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

export default userReducer;