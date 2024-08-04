import React from 'react';
import styles from './styles.module.css';
import setPagination from '../../services/setPagination';

const Pagination = (props) => {
    const { pages, setPages, currentPage, setCurrentPage, pagesCount } = props;
    return (
        <div className={styles["pagination-container"]}>
            {pages.map(pageNumber => (
                <button
                    key={pageNumber}
                    onClick={() => setPagination(pageNumber, setCurrentPage, setPages, pagesCount)}
                    className={currentPage === pageNumber ? styles["active-pagination-element"] : styles["pagination-element"]}
                >
                    {pageNumber}
                </button>
            ))}
        </div>
    );
}

export default Pagination;
