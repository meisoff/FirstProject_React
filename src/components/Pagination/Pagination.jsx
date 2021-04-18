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
            <a className={"pagination__link " + active} onClick={() => this.props.updatePaginationList(element)}
               href="/#">{element}</a>
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

            let key = (ownElement, secondaryElement ) => {
                return `element${ownElement}` + secondaryElement.toString();
            }

            if (pages.length > 3) {
                if (element === this.props.currentPage && element !== 1 && element !== pages.length ) {
                    return (
                        <ul className="pagination--wrapper" key={element}>
                            <li className="pagination__item" key={key(element, element - 1)}>
                                {this.paginationElement(element - 1)}
                            </li>

                            <li className="pagination__item" key={key(element, element)}>
                                {this.paginationElement(element, "active")}
                            </li>

                            <li className="pagination__item" key={key(element, element + 1)}>
                                {this.paginationElement(element + 1)}
                            </li>
                        </ul>
                    )
                }
                else {
                    if (element === this.props.currentPage && element === pages.length) {
                        return (
                            <ul className="pagination--wrapper" key={element}>
                                <li className="pagination__item" key={key(element, element - 2)}>
                                    {this.paginationElement(element - 2)}
                                </li>

                                <li className="pagination__item" key={key(element, element - 1)}>
                                    {this.paginationElement(element - 1)}
                                </li>

                                <li className="pagination__item" key={key(element, element)}>
                                    {this.paginationElement(element, "active")}
                                </li>
                            </ul>
                        )
                    }
                    else if (element === 1 && element === this.props.currentPage) {
                        return (
                            <ul className="pagination--wrapper" key={element}>
                                <li className="pagination__item" key={key(element, element)}>
                                    {this.paginationElement(element, "active")}
                                </li>

                                <li className="pagination__item" key={key(element, element + 1)}>
                                    {this.paginationElement(element + 1)}
                                </li>

                                <li className="pagination__item" key={key(element, element + 2)}>
                                    {this.paginationElement(element + 2)}
                                </li>
                            </ul>
                        )
                    }
                    else return null
                }
            }
            else {
                if (element === this.props.currentPage) {
                    return (
                        <ul className="pagination--wrapper" key={element}>
                            <li className="pagination__item" key={key(element, element)}>
                                {this.paginationElement(element, "active")}
                            </li>
                        </ul>
                    )
                } else {
                    return (
                        <ul className="pagination--wrapper" key={element}>
                            <li className="pagination__item" key={key(element, element)}>
                                {this.paginationElement(element)}
                            </li>
                        </ul>
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