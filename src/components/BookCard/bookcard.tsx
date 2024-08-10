import React, { useState } from 'react';
import styles from './styles.module.css';
import BookCardFront from './bookcard_front';
import BookCardBack from './bookcard_back';

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

interface BookCardProps {
  book: Book;
  loggedIn: boolean;
  token: string;
}

const BookCard: React.FC<BookCardProps> = ({ book, loggedIn, token }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles["book-card"]}>
      <div className={`${styles["book-card-inner"]} ${isFlipped ? styles.flipped : ''}`}>
        <BookCardFront
          key={book.book_id + "A"}
          book={book}
          onImageClick={handleFlip}
          loggedIn={loggedIn}
          token={token}
        />
        <BookCardBack
          key={book.book_id + "B"}
          book={book}
          onClick={handleFlip}
        />
      </div>
    </div>
  );
};

export default BookCard;
