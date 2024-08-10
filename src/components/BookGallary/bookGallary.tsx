import React from 'react';
import styles from "./styles.module.css";
import BookCard from "../BookCard/bookcard";

interface Book {
  book_id: number;
  title: string;
  author_name: string;
  year: number;
  genre: string;
  description: string;
  thumbnail: string;
  liked: number;
  average_rating: number;
}

interface BookGallaryProps {
  displayContent: Book[];
  setDisplayContent: React.Dispatch<React.SetStateAction<Book[]>>;
  loggedIn: boolean;
  token: string;
}

const BookGallary: React.FC<BookGallaryProps> = ({ displayContent, loggedIn, token }) => {
  return (
    <div className={styles["book-gallary"]}>
      {displayContent.map((book) => 
        <BookCard 
          key={book.book_id}
          book={book}
          loggedIn={loggedIn}
          token={token}
        />
      )}
    </div>
  );
};

export default BookGallary;
