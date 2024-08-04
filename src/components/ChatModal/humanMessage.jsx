import styles from "./styles.module.css"

const HumanMessage = (props) => {
    return (
        <div className={styles["human-messages-container"]}>
            <div className={styles["human-messages"]}>
                {props.message}
            </div>
        </div>
    )
}

export default HumanMessage;