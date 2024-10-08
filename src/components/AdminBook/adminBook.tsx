import React from 'react';
import styles from './styles.module.css';

interface AdminBookProps {
  title: string;
  genre: string;
  author: string;
  year: number;
  description: string;
  rating: number;
}

function process(input: string): string {
  const limit = 30;
  return input.length > limit ? input.slice(0, limit) + "..." : input;
}

const AdminBook: React.FC<AdminBookProps> = ({ title, genre, author, year, description }) => {
  return (
    <div className={styles.bookRow}>
      <button className={styles.deleteButton}>
        <svg style={{ backgroundColor: "transparent" }} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.89158 11.9832C7.73379 11.9832 7.576 11.9254 7.45602 11.8091C7.21522 11.5771 7.21522 11.2019 7.45602 10.9699L11.3942 7.17623C11.635 6.94427 12.0245 6.94427 12.2653 7.17623C12.5061 7.40819 12.5061 7.78344 12.2653 8.01539L8.32715 11.8091C8.20717 11.9254 8.04938 11.9832 7.89158 11.9832Z" fill="#FF0000"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M11.8314 11.9855C11.6736 11.9855 11.5158 11.9277 11.3958 11.8114L7.45437 8.01375C7.21357 7.78179 7.21357 7.40654 7.45437 7.17458C7.69599 6.94262 8.08553 6.94262 8.3255 7.17458L12.267 10.9722C12.5078 11.2042 12.5078 11.5794 12.267 11.8114C12.147 11.9277 11.9884 11.9855 11.8314 11.9855Z" fill="#FF0000"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M6.29929 2.77084C4.22007 2.77084 2.87638 4.1428 2.87638 6.26684V12.7332C2.87638 14.8572 4.22007 16.2292 6.29929 16.2292H13.4229C15.5029 16.2292 16.8474 14.8572 16.8474 12.7332V6.26684C16.8474 4.1428 15.5029 2.77084 13.4237 2.77084H6.29929ZM13.4229 17.4167H6.29929C3.51412 17.4167 1.64365 15.5341 1.64365 12.7332V6.26684C1.64365 3.46593 3.51412 1.58334 6.29929 1.58334H13.4237C16.2089 1.58334 18.0802 3.46593 18.0802 6.26684V12.7332C18.0802 15.5341 16.2089 17.4167 13.4229 17.4167Z" fill="#FF0000"/>
        </svg>
      </button>
      <div className={styles.bookCell}>{process(title)}</div>
      <div className={styles.bookCell}>{process(author)}</div>
      <div className={styles.bookCell} id={styles.year}>{year}</div>
      <div className={styles.bookCell}>{genre}</div>
      <div className={styles.bookCell} id={styles.description}>{process(description)}</div>
    </div>
  );
};

export default AdminBook;
