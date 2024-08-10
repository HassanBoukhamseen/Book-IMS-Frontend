import React from 'react';
import styles from './styles.module.css';
import setPagination from '../../services/setPagination';

interface PaginationProps {
    pages: number[];
    setPages: React.Dispatch<React.SetStateAction<number[]>>;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    pagesCount: number;
}

const Pagination: React.FC<PaginationProps> = ({ pages, setPages, currentPage, setCurrentPage, pagesCount }) => {
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
