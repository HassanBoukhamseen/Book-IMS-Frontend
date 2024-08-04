import styles from "./styles.module.css";
import BookCard from "../BookCard/bookcard";

const BookGallary = (props) => {
    const dataToRender = props.searchResults && props.searchResults.length > 0 ? props.searchResults : props.books;

    return (
        <div className={styles["book-gallary"]}>
            {dataToRender.map((book) => 
                <BookCard 
                    key={book.book_id}
                    book={book}
                />
            )}
        </div>
    );
};

export default BookGallary