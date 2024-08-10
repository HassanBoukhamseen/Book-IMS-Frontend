import React, { useEffect, useState } from 'react';
import SearchFilters from "../components/SearchFilters/searchFilters";
import SearchBar from "../components/SearchBar/searchbar";
import BookGallary from "../components/BookGallary/bookGallary";
import Pagination from "../components/Pagination/pagination";
import ChatModal from "../components/ChatModal/chatModal";
import ChatButton from "../components/ChatButton/chatButton";

import { retrieveBooksWithoutLogIn, retrieveBooksWithLogIn } from "../services/getBooks";
import { retrieveSearchResultsWithoutLogIn, retrieveSearchResultsWithLogIn } from "../services/searchLibrary";
import getLikedBooks from "../services/getLikedBooks";
import setPagination from "../services/setPagination";

interface LibraryPageProps {
  loggedIn: boolean;
  token: string;
}

const LibraryPage: React.FC<LibraryPageProps> = ({ loggedIn, token }) => {
  const [displayContent, setDisplayContent] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagesCount, setPagesCount] = useState<number>(0);
  const [pages, setPages] = useState<number[]>([1, 2, 3, 4, 5]);
  const [filtersDisplay, setFiltersDisplay] = useState<string>("none");
  const [modalDisplay, setModalDisplay] = useState<string>("none");
  const [searchInput, setSearchInput] = useState<string>("");
  const [displayType, setDisplayType] = useState<string>("all");
  const [orderBy, setOrderBy] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooksAndAuthors = async () => {
      try {
        if (displayType === "all") {
          const booksResponse = loggedIn 
            ? await retrieveBooksWithLogIn((currentPage - 1) * 12, currentPage * 12, orderBy, token)
            : await retrieveBooksWithoutLogIn((currentPage - 1) * 12, currentPage * 12, orderBy);
          
          if (booksResponse && booksResponse.books) {
            setDisplayContent(booksResponse.books);
            setPagesCount(Math.ceil(booksResponse.count / 12));
          }
        } else if (displayType === "search") {
          const searchResultsResponse = loggedIn
            ? await retrieveSearchResultsWithLogIn(searchInput, (currentPage - 1) * 12, currentPage * 12, token)
            : await retrieveSearchResultsWithoutLogIn(searchInput, (currentPage - 1) * 12, currentPage * 12);
          
          if (searchResultsResponse && searchResultsResponse.books) {
            setDisplayContent(searchResultsResponse.books);
            setPagesCount(Math.ceil(searchResultsResponse.count / 12));
          }
        } else if (displayType === "liked" && loggedIn) {
          const likedBooksResponse = await getLikedBooks(token, (currentPage - 1) * 12, currentPage * 12, setDisplayType);
          
          if (likedBooksResponse && likedBooksResponse.liked_books) {
            setDisplayContent(likedBooksResponse.liked_books);
            setPagesCount(Math.ceil(likedBooksResponse.count / 12));
          }
        }
        setPagination(currentPage, setCurrentPage, setPages, pagesCount);
      } catch (error) {
        console.error('Failed to fetch books', error);
      }
    };

    fetchBooksAndAuthors();
  }, [currentPage, displayType, searchInput, pagesCount, orderBy, token, loggedIn]);


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
        loggedIn={loggedIn}
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
          loggedIn={loggedIn}
          token={token}
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
      <ChatModal modalDisplay={modalDisplay} />
      <ChatButton
        modalDisplay={modalDisplay}
        setModalDisplay={setModalDisplay}
      />
    </div>
  );
}

export default LibraryPage;
