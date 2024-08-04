import styles from "./styles.module.css"

const LoginDropdown = (props) => {
    return (
        <div id={styles["options"]} style={{"display": props.loginDropdownDisplay}}>
            <div id={styles["options-list"]}>
                <li className={styles["options-element"]}><a href="/login-signup" style={{"textDecoration": "none", "backgroundColor": "transparent"}}>Login</a></li>
                <li className={styles["options-element"]}><a href="login-signup" style={{"textDecoration": "none", "backgroundColor": "transparent"}}>Sign Up</a></li>
            </div>
        </div>
    )
}

export default LoginDropdown;