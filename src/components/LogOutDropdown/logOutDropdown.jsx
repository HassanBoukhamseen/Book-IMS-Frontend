import styles from "./styles.module.css"

const LogOutDropdown = (props) => {
    console.log(props.logOutDropdownDisplay)
    return (
        <div id={styles["logout-options"]} style={{"display": props.logOutDropdownDisplay}}>
            <div id={styles["logout-options-list"]}>
                <li onClick={() => props.setLoggedIn(false)} className={styles["logout-options-element"]}><a href="/login-signup" style={{"textDecoration": "none", "backgroundColor": "transparent", "color": "red"}}>Logout</a></li>            
            </div>
        </div>
    )
}

export default LogOutDropdown;