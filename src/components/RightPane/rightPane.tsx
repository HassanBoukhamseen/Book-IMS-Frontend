import React from 'react';
import styles from "./styles.module.css";
import User from "../User/user";

interface RightPaneProps {
    users: Array<{ email: string }>;
}

const RightPane: React.FC<RightPaneProps> = ({ users }) => {
    return (
        <div id={styles["right-pane"]}>
            <div id={styles["right-pane-header"]}>
                Users
            </div>
            <div id={styles["right-pane-body"]}>
                {users && users.map((user, index) => (
                    <User key={index} username={user.email} role={0} />
                ))}
            </div>
        </div>
    );
};

export default RightPane;
