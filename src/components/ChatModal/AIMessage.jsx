import styles from "./styles.module.css"

const AIMessage = (props) => {
    return (
        <div className={styles["AI-messages-container"]}>
            <div className={styles["AI-messages"]}>
                {props.message}
            </div>
        </div>
    )
}

export default AIMessage;