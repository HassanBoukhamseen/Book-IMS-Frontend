import styles from "./styles.module.css";
import BookCard from "../BookCard/bookcard";

const BookGallary = (props) => {
    return (
        <div className={styles["book-gallary"]}>
            {props.displayContent.map((book) => 
                <BookCard 
                    key={book.book_id}
                    book={book}
                    loggedIn={props.loggedIn}
                    token={props.token}
                />
            )}
        </div>
    );
};

export default BookGallary