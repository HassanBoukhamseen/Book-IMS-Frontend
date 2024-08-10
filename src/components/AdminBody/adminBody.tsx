import React, { useState, useEffect } from 'react';
import styles from "./styles.module.css";
import LeftPane from "../LeftPane/leftPane";
import RightPane from "../RightPane/rightPane";
import getUsers, { UsersResponse } from "../../services/getUsers";
import { retrieveBooksWithoutLogIn, FetchBooksResponse } from "../../services/getBooks";

interface AdminBodyProps {
  token: string;
}

const AdminBody: React.FC<AdminBodyProps> = ({ token }) => {
  const [users, setUsers] = useState<UsersResponse['users']>([]);
  const [books, setBooks] = useState<FetchBooksResponse['books']>([]);

  useEffect(() => {
    const functionasync = async () => {
      try {
        const usersResponse = await getUsers(token);
        console.log(usersResponse);
        if (usersResponse && usersResponse.users) {
          setUsers(usersResponse.users);
        }

        const booksResponse = await retrieveBooksWithoutLogIn(0, 6180);
        if (booksResponse && booksResponse.books) {
          setBooks(booksResponse.books);
        }
      } catch (error) {
        console.error(error);
      }
    };
    functionasync();
  }, [token]);

  return (
    <div id={styles["admin-body"]}>
      {books.length > 0 && <LeftPane books={books} />}
      {users.length > 0 && <RightPane users={users} />}
    </div>
  );
};

export default AdminBody;
