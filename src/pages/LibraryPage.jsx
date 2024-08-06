import SearchFilters from "../components/SearchFilters/searchFilters";
import SearchBar from "../components/SearchBar/searchbar";
import BookGallary from "../components/BookGallary/bookGallary";
import Pagination from "../components/Pagination/pagination";
import ChatModal from "../components/ChatModal/chatModal";
import ChatButton from "../components/ChatButton/chatButton";

import { retrieveBooksWithoutLogIn, retrieveBooksWithLogIn }  from "../services/getBooks";
import { retrieveSearchResultsWithoutLogIn, retrieveSearchResultsWithLogIn } from "../services/searchLibrary"
import getLikedBooks from "../services/getLikedBooks"
import setPagination from "../services/setPagination"

import { useEffect, useState } from 'react';

function LibraryPage(props) {
    const [displayContent, setDisplayContent] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(0);
    const [pages, setPages] = useState([1, 2, 3, 4, 5]);

    const [filtersDisplay, setFiltersDisplay] = useState("none");
    const [modalDisplay, setModalDisplay] = useState("none");

    
    const [searchInput, setSearchInput] = useState("");
    const [displayType, setDisplayType] = useState("all");
    
    const [orderBy, setOrderBy] = useState(null);

    useEffect(() => {
        const fetchBooksAndAuthors = async () => {
            try {
                if (displayType === "all") {
                    const booksResponse = props.loggedIn === true ? 
                    await retrieveBooksWithLogIn((currentPage - 1) * 12, currentPage * 12, orderBy, props.token) :
                    await retrieveBooksWithoutLogIn((currentPage - 1) * 12, currentPage * 12, orderBy);
                    if (booksResponse && booksResponse.books) {
                        setDisplayContent(booksResponse.books);
                        setPagesCount(Math.ceil(booksResponse.count) / 12);
                    }
                } else if (displayType === "search") {
                    const searchResultsResponse = props.loggedIn === true ? 
                    await retrieveSearchResultsWithLogIn(searchInput, (currentPage - 1) * 12, currentPage * 12, props.token) : 
                    await retrieveSearchResultsWithoutLogIn(searchInput, (currentPage - 1) * 12, currentPage * 12);
                    if (searchResultsResponse && searchResultsResponse.books) {
                        setDisplayContent(searchResultsResponse.books)
                        setPagesCount(Math.ceil(searchResultsResponse.count / 12));
                    }
                } else if (displayType === "liked" && props.loggedIn) {
                    const likedBooksResponse =
                        await getLikedBooks(props.token, (currentPage - 1) * 12, currentPage * 12, setDisplayType)
                    if (likedBooksResponse && likedBooksResponse.liked_books) {
                        setDisplayContent(likedBooksResponse.liked_books)
                        setPagesCount(Math.ceil(likedBooksResponse.count / 12))
                    }
                }
                setPagination(currentPage, setCurrentPage, setPages, pagesCount)
            } catch (error) {
                console.error('Failed to fetch books', error);
            }
        };
        fetchBooksAndAuthors();
    }, [currentPage, displayType, searchInput, pagesCount, orderBy, props.token, props.loggedIn]);
    console.log(displayType)
    return (
        <div>
            <SearchBar
                filtersDisplay={filtersDisplay}
                setFiltersDisplay={setFiltersDisplay}
                setDisplayType={setDisplayType}
                setDisplayContent={setDisplayContent}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setCurrentPage={setCurrentPage}
                loggedIn={props.loggedIn}
                displayType={displayType}
            />
            <SearchFilters 
                filtersDisplay={filtersDisplay} 
                setOrderBy={setOrderBy}
                setDisplayType={setDisplayType}
            />
            {displayContent.length > 0 ? (
                <BookGallary
                    displayContent={displayContent}
                    setDisplayContent={setDisplayContent}
                    loggedIn={props.loggedIn}
                    token={props.token}
                />
            ) : (
                <div>Loading...</div>
            )}
            <Pagination
                pages={pages}
                setPages={setPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagesCount={pagesCount}
            />
            <ChatModal
                modalDisplay={modalDisplay}
            />
            <ChatButton
                modalDisplay={modalDisplay}
                setModalDisplay={setModalDisplay}
            />
        </div>
    );
}

export default LibraryPage;
