import styles from "./styles.module.css"
import BookCardFront from "./bookcard_front"
import BookCardBack from "./bookcard_back"


const BookCard = (props) => {
    return (
        <div className={styles["book-card"]}>
            <div className={styles["book-card-inner"]}>
                <BookCardFront
                    key={props.book.book_id + "A"}
                    book={props.book}
                />
                <BookCardBack
                    key={props.book.book_id + "B"}
                    book={props.book}
                />
            </div>
        </div>
    );
};

export default BookCard;
