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

    render() {
        let totalPages =
            Math.ceil(this.props.totalPostCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }

        let pagination = pages.map(element => {
            if (pages.length > 3 ) {
                if (element === this.props.currentPage  && element !== 1) {
                    return (
                        <>
                            <li className="pagination__item" key={(element - 1).toString()}>
                                <a className="pagination__link" onClick={() => this.props.updatePaginationList((element - 1))}
                                   href="/#">{(element - 1)}</a>
                            </li>

                            <li className="pagination__item" key={element.toString()}>
                                <a className="pagination__link active" onClick={() => this.props.updatePaginationList(element)}
                                   href="/#">{element}</a>
                            </li>

                            <li className="pagination__item" key={(element + 1).toString()}>
                                <a className="pagination__link" onClick={() => this.props.updatePaginationList((element + 1))}
                                   href="/#">{(element + 1)}</a>
                            </li>
                        </>
                    )
                } else {
                    if (element === this.props.currentPage) {
                        return (
                            <>
                                <li className="pagination__item" key={element.toString()}>
                                    <a className="pagination__link active" onClick={() => this.props.updatePaginationList(element)}
                                       href="/#">{element}</a>
                                </li>

                                <li className="pagination__item" key={(element + 1).toString()}>
                                    <a className="pagination__link" onClick={() => this.props.updatePaginationList((element + 1))}
                                       href="/#">{(element + 1)}</a>
                                </li>

                                <li className="pagination__item" key={(element + 1).toString()}>
                                    <a className="pagination__link" onClick={() => this.props.updatePaginationList((element + 2))}
                                       href="/#">{(element + 2)}</a>
                                </li>
                            </>
                        )
                    }
                }
            } else {
                if (element === this.props.currentPage) {
                    return (
                        <li className="pagination__item" key={element.toString()}>
                            <a className="pagination__link active" onClick={() => this.props.updatePaginationList(element)}
                               href="/#">{element}</a>
                        </li>
                    )
                } else {
                    return (
                        <li className="pagination__item" key={element.toString()}>
                            <a className="pagination__link" onClick={() => this.props.updatePaginationList(element)}
                               href="/#">{element}</a>
                        </li>
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