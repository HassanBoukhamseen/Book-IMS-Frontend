import React from 'react';
import styles from "./styles.module.css";
import AdminBook from "../AdminBook/adminBook";

interface Book {
  book_id: number;
  title: string;
  author_name: string;
  subtitle: string;
  thumbnail: string;
  genre: string;
  description: string;
  year: number;
  rating: number;
  num_pages: number;
  ratings_count: number;
  liked: number;
}

interface LeftPaneProps {
  books: Book[];
}

const LeftPane: React.FC<LeftPaneProps> = ({ books }) => {
  return (
    <div id={styles["left-pane"]}>
      <div id={styles["left-pane-header"]}>
        Books
      </div>
      <div id={styles["left-pane-body"]}>
        <div className={styles.bookRow}>
          <div className={styles.bookCell}>title</div>
          <div className={styles.bookCell}>author</div>
          <div className={styles.bookCell} id={styles.year}>year</div>
          <div className={styles.bookCell}>genre</div>
          <div className={styles.bookCell} id={styles.description}>description</div>
        </div>
       
        {books && books.map((book, index) => (
          <AdminBook
            key={index}
            title={book.title}
            genre={book.genre}
            author={book.author_name}
            year={book.year}
            rating={book.rating}
            description={book.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftPane;
