function setPagination(currentPage, setCurrentPage, setPages, pagesCount) {
    setCurrentPage(currentPage);
    let pages = [];

    if (pagesCount <= 5) {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    } else if (currentPage < 5) {
        pages = [1, 2, 3, 4, 5];
    } else if (currentPage > pagesCount - 4) {
        for (let i = pagesCount - 4; i <= pagesCount; i++) {
            pages.push(i);
        }
    } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            pages.push(i);
        }
    }

    setPages(pages);
}

export default setPagination;
