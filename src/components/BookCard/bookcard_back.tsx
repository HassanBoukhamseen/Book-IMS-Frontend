import React from 'react';
import styles from './styles.module.css';

interface Book {
  title: string;
  description: string;
}

interface BookCardBackProps {
  book: Book;
  onClick: () => void;
}

function process_titles(title: string): string {
  const limit = 25;
  title = title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return title.length >= limit ? title.slice(0, limit - 2) + '...' : title;
}

const BookCardBack: React.FC<BookCardBackProps> = ({ book, onClick }) => {
  return (
    <div className={styles["book-card-back"]} onClick={onClick}>
      <div className={styles["book-title-back-container"]}>
        <p className={styles["book-title-back"]}>{process_titles(book.title)}</p>
      </div>
      <div className={styles["description-container"]}>
        <div className={styles["book-description"]}>
          {book.description}
        </div>
      </div>
    </div>
  );
};

export default BookCardBack;
