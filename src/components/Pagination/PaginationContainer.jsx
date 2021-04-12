import React from 'react';
import {connect} from "react-redux";
import Pagination from "./Pagination";
import {updatePaginationList} from "../../redux/reducers/paginationListReducer";

let mapStateToProps = (state) => {
    return {
        pageSize: state.paginationList.pageSize,
        totalPostCount: state.paginationList.totalPostCount,
        currentPage: state.paginationList.currentPage
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        updatePaginationList: (value) => {
            dispatch(updatePaginationList(value))
        }
    }
}

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination)

export default PaginationContainer;