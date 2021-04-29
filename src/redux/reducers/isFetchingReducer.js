const FETCHING_UPDATE = "FETCHING_UPDATE";

let initialState = {
    isFetching: false
};

const isFetchingReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCHING_UPDATE:
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
}

export const isFetchingUpdate = (isFetching) => {
    return { type: FETCHING_UPDATE, isFetching}
}

export default isFetchingReducer;