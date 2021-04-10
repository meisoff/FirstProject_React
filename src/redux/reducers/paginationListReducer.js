import React from "react";
const UPDATE_PAGINATION = "UPDATE_PAGINATION";

let initialState = {
    pageSize: 5,
    totalPostCount: 14,
    currentPage: 1
}

const paginationListReducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case UPDATE_PAGINATION:
            return { ...state, currentPage: action.currentPage }
        default:
            return state
    }
}

export const updatePaginationList = (value) => {
    return {type: UPDATE_PAGINATION, currentPage: value}
}

export default paginationListReducer;