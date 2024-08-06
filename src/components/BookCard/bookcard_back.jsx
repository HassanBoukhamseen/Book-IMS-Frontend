import React from 'react';
import styles from './styles.module.css';

function process_titles(title) {
    const limit = 25;
    title = title.split(' ').map(title => title.charAt(0).toUpperCase() + title.slice(1)).join(' ');
    if (title.length >= limit) {
        return title.slice(0, limit - 2) + '...';
    } else {
        return title;
    }
}

const BookCardBack = (props) => {
    return (
        <div className={styles["book-card-back"]} onClick={props.onClick}>
            <div className={styles["book-title-back-container"]}>
                <p className={styles["book-title-back"]}>{process_titles(props.book.title)}</p>
            </div>
            <div className={styles["description-container"]}>
                <div className={styles["book-description"]}>
                    {props.book.description}
                </div>
            </div>
        </div>
    );
};

export default BookCardBack;
