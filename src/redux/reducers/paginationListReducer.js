import store from "../redux-store";

const UPDATE_PAGINATION = "UPDATE_PAGINATION";
const UPDATE_TOTAL_POST_COUNT = "UPDATE_TOTAL_POST_COUNT";


let initialState = {
    pageSize: 5,
    totalPostCount: 4,
    currentPage: 1
}

const paginationListReducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case UPDATE_PAGINATION:
            return { ...state, currentPage: action.currentPage }
        case UPDATE_TOTAL_POST_COUNT:
            return {...state, totalPostCount: action.value}
        default:
            return state
    }
}

export const updatePaginationList = (value) => {
    return {type: UPDATE_PAGINATION, currentPage: value}
}

export const updateTotalPostCount = () => {
    return {
        type: UPDATE_TOTAL_POST_COUNT, value: store.getState().posts.length
    }
}

export default paginationListReducer;