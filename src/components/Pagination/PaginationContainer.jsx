import {connect} from "react-redux";
import Pagination from "./Pagination";
import {updatePaginationList} from "../../redux/reducers/paginationListReducer";

let mapStateToProps = (state) => {
    return {
        pageSize: state.paginationList.pageSize,
        totalPostCount: state.paginationList.totalPostCount,
        currentPage: state.paginationList.currentPage,
    }
}

const PaginationContainer = connect(mapStateToProps, {updatePaginationList})(Pagination)

export default PaginationContainer;