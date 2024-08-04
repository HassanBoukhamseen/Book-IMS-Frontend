import styles from "./styles.module.css"
import LeftPane from "../LeftPane/leftPane"
import RightPane from "../RightPane/rightPane"
import getUsers from "../../services/getUsers"
import retrieveBooks from "../../services/getBooks"
import {useState, useEffect} from 'react'


const AdminBody = (props) => {

    const [users, setUsers] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() => {
        const functionasync = async () => {
            const usersResponse = await getUsers(props.token);
            console.log(usersResponse)
            if (usersResponse && usersResponse.users) {
                setUsers(usersResponse.users)
            }

            const booksResponse = await retrieveBooks(0, 6180);
            if (booksResponse && booksResponse.books) {
                setBooks(booksResponse.books)
            }
        }
        functionasync();
    }, [props.token])

    return (
        <div id={styles["admin-body"]}>
            {
                books.length > 0 && (<LeftPane books={books}/>)
            }
            {
                users.length > 0 && (<RightPane users={users}/>)
            }
        </div>
    )
};

export default AdminBody;