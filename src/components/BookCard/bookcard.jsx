import React, { useState } from 'react';
import styles from './styles.module.css';
import BookCardFront from './bookcard_front';
import BookCardBack from './bookcard_back';

const BookCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={styles["book-card"]}>
            <div className={`${styles["book-card-inner"]} ${isFlipped ? styles.flipped : ''}`}>
                <BookCardFront
                    key={props.book.book_id + "A"}
                    book={props.book}
                    onImageClick={handleFlip}
                    loggedIn={props.loggedIn}
                    token={props.token}
                />
                <BookCardBack
                    key={props.book.book_id + "B"}
                    book={props.book}
                    onClick={handleFlip}
                />
            </div>
        </div>
    );
};

export default BookCard;
