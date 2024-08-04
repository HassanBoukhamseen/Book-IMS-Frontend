import styles from "./styles.module.css"


function process_titles(title) {
    const limit = 25
    title = title.split(" ").map(title => title.charAt(0).toUpperCase() + title.slice(1)).join(' ')
    console.log(title)
    if (title.length >= limit) {
        return title.slice(0, limit-2) + "..."
    } else {
        return title
    }
}

function process_descriptions(desc) {
    const limit = 450;
    if (desc.length >= limit) {
        return desc.slice(0, limit-2) + "..."
    } else {
        return desc
    }
}

const BookCardBack = (props) => {
    return (
        <div className={styles["book-card-back"]}>
            <div className={styles["book-title-back-container"]}>
            <p className={styles["book-title-back"]}>{process_titles(props.book.title)}</p>
            </div>
            <div className={styles["description-container"]}>
                <div className={styles["book-description"]}>
                    {process_descriptions(props.book.description)}
                </div>
            </div>
          
        </div>
    );
};

export default BookCardBack;
