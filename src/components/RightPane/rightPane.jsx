import styles from "./styles.module.css"
import User from "../User/user"

const RightPane = (props) => {
    return (
        <div id={styles["right-pane"]}>

            <div id={styles["right-pane-header"]}>
                Users
            </div>

            <div id={styles["right-pane-body"]}>
                {props.users && (
                    props.users.map((user) => <User username={user.email} role={0}/>)
                )}
            </div>

        </div>
    )
};

export default RightPane;