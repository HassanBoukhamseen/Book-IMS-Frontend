import SearchFilters from "../components/SearchFilters/searchFilters";
import SearchBar from "../components/SearchBar/searchbar";
import BookGallary from "../components/BookGallary/bookGallary";
import Pagination from "../components/Pagination/pagination";
import ChatModal from "../components/ChatModal/chatModal";
import ChatButton from "../components/ChatButton/chatButton";

import retrieveBooks  from "../services/getBooks";
import retrieveSearchResults  from "../services/searchLibrary"
import setPagination from "../services/setPagination"

import { useEffect, useState } from 'react';

function LibraryPage() {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(0);
    const [pages, setPages] = useState([1, 2, 3, 4, 5]);

    const [filtersDisplay, setFiltersDisplay] = useState("none");
    const [modalDisplay, setModalDisplay] = useState("none");

    const [searchResults, setSearchResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [displaySearchOrAll, setDisplaySearchOrAll] = useState("all");
    
    const [orderBy, setOrderBy] = useState(null);

    useEffect(() => {
        const fetchBooksAndAuthors = async () => {
            if (searchInput === "" ) {
                setDisplaySearchOrAll("all")
                setSearchResults([])
            }
            try {
                if (displaySearchOrAll === "all") {
                    const booksResponse = await retrieveBooks((currentPage - 1) * 12, currentPage * 12, orderBy);
                    if (booksResponse && booksResponse.books) {
                        setBooks(booksResponse.books);
                        setPagesCount(booksResponse.count);
                    }
                } else if (displaySearchOrAll === "search") {
                    const searchResultsResponse = await retrieveSearchResults(searchInput, (currentPage - 1) * 12, currentPage * 12);
                    if (searchResultsResponse && searchResultsResponse.books) {
                        setSearchResults(searchResultsResponse.books)
                        setPagesCount(Math.ceil(searchResultsResponse.count / 12));
                    }
                }
                setPagination(currentPage, setCurrentPage, setPages, pagesCount)
            } catch (error) {
                console.error('Failed to fetch books or authors', error);
            }
        };
        fetchBooksAndAuthors();
    }, [currentPage, displaySearchOrAll, searchInput, pagesCount, orderBy]);

    return (
        <div>
            <SearchBar
                filtersDisplay={filtersDisplay}
                setFiltersDisplay={setFiltersDisplay}
                setDisplaySearchOrAll={setDisplaySearchOrAll}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setCurrentPage={setCurrentPage}
            />
            <SearchFilters 
                filtersDisplay={filtersDisplay} 
                setOrderBy={setOrderBy}
                setDisplaySearchOrAll={setDisplaySearchOrAll}
                setSearchResults={setSearchResults}
            />
            {books.length > 0 ? (
                <BookGallary
                    books={books}
                    searchResults={searchResults}
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
