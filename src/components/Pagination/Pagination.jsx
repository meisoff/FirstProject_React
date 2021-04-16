import React from "react";

class Pagination extends React.Component {
    nextPaginationList = (value) => {
        if (value < Math.ceil(this.props.totalPostCount / this.props.pageSize)) {
            (this.props.updatePaginationList(value + 1))
        }
    }
    lastPaginationList = (value) => {
        if (value > 1) {
            this.props.updatePaginationList(value - 1)
        }
    }
    paginationElement = (element, active) => {
        return (
            <li className="pagination__item" key={(element).toString()}>
                <a className={"pagination__link " + active} onClick={() => this.props.updatePaginationList(element)}
                   href="/#">{element}</a>
            </li>
        )
    }

    render() {
        let totalPages =
            Math.ceil(this.props.totalPostCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }

        let pagination = pages.map(element => {
            if (pages.length > 3) {
                if (element === this.props.currentPage && element !== 1 && element !== pages.length - 1) {
                    return (
                        <>
                            {this.paginationElement(element - 1)}
                            {this.paginationElement(element, "active")}
                            {this.paginationElement(element + 1)}
                        </>
                    )
                } else {
                    if (element === this.props.currentPage) {
                        return (
                            <>
                                {this.paginationElement(element, "active")}
                                {this.paginationElement(element + 1)}
                                {this.paginationElement(element + 2)}
                            </>
                        )
                    }
                }
            } else {
                if (element === this.props.currentPage) {
                    return (
                        <>
                            {this.paginationElement(element, "active")}
                        </>
                    )
                } else {
                    return (
                        <>
                            {this.paginationElement(element)}
                        </>
                    )
                }
            }
        })

        return (
            <ul className="pagination">
                <li className="pagination__item">
                    <a className="pagination__link"
                       onClick={() => this.lastPaginationList(this.props.currentPage)} href="/#">&lt;</a>
                </li>

                {pagination}

                <li className="pagination__item">
                    <a className="pagination__link"
                       onClick={() => this.nextPaginationList(this.props.currentPage)} href="/#">&gt;</a>
                </li>
            </ul>
        )
    }
}

export default Pagination;