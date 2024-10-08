import React from 'react';
import styles from "./styles.module.css";

interface LogOutDropdownProps {
  logOutDropdownDisplay: string;
  setLoggedIn: (value: boolean) => void;
}

const LogOutDropdown: React.FC<LogOutDropdownProps> = ({ logOutDropdownDisplay, setLoggedIn }) => {
  return (
    <div id={styles["logout-options"]} style={{ display: logOutDropdownDisplay }}>
      <div id={styles["logout-options-list"]}>
        <li onClick={() => setLoggedIn(false)} className={styles["logout-options-element"]}>
          <svg id={styles["logout-icon"]} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.791 12.75H3.75C3.336 12.75 3 12.414 3 12C3 11.586 3.336 11.25 3.75 11.25H15.791C16.205 11.25 16.541 11.586 16.541 12C16.541 12.414 16.205 12.75 15.791 12.75Z" fill="red" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.8633 15.665C12.6713 15.665 12.4783 15.592 12.3323 15.444C12.0393 15.15 12.0413 14.676 12.3343 14.384L14.7283 12L12.3343 9.61498C12.0413 9.32298 12.0393 8.84898 12.3323 8.55498C12.6253 8.26098 13.0993 8.26098 13.3923 8.55298L16.3213 11.469C16.4633 11.609 16.5423 11.801 16.5423 12C16.5423 12.199 16.4633 12.391 16.3213 12.531L13.3923 15.446C13.2463 15.592 13.0543 15.665 12.8633 15.665Z" fill="red" />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.042 22H12.157C9.71803 22 7.73303 20.015 7.73303 17.575V16.633C7.73303 16.219 8.06903 15.883 8.48303 15.883C8.89703 15.883 9.23303 16.219 9.23303 16.633V17.575C9.23303 19.187 10.545 20.5 12.157 20.5H17.042C18.661 20.5 19.978 19.184 19.978 17.564V6.425C19.978 4.813 18.665 3.5 17.053 3.5H12.168C10.55 3.5 9.23303 4.816 9.23303 6.434V7.367C9.23303 7.781 8.89703 8.117 8.48303 8.117C8.06903 8.117 7.73303 7.781 7.73303 7.367V6.434C7.73303 3.989 9.72303 2 12.168 2H17.053C19.492 2 21.478 3.985 21.478 6.425V17.564C21.478 20.01 19.487 22 17.042 22Z" fill="red" />
          </svg>
          <a href="/login-signup" style={{ textDecoration: "none", backgroundColor: "transparent", color: "red", marginLeft: "10%" }}>Logout</a>
        </li>
      </div>
    </div>
  );
}

export default LogOutDropdown;
