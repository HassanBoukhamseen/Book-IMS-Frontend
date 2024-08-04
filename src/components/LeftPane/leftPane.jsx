import styles from "./styles.module.css"
import AdminBook from "../../components/AdminBook/adminBook"

const LeftPane = (props) => {
    return (
        <div id={styles["left-pane"]}>

            <div id={styles["left-pane-header"]}>
                Books
            </div>

            <div id={styles["left-pane-body"]}>
                {props.books && (
                    props.books.map((book) => <AdminBook title={book.title} genre={book.genre} author={book.author_name} year={book.year} rating={book.rating} description={book.description}/>)
                )}
            </div>

        </div>
    )
};

export default LeftPane;