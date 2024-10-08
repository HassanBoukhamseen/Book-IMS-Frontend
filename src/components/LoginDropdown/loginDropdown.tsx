import React from 'react';
import styles from "./styles.module.css";

interface LoginDropdownProps {
  loginDropdownDisplay: string;
}

const LoginDropdown: React.FC<LoginDropdownProps> = ({ loginDropdownDisplay }) => {
  return (
    <div id={styles["options"]} style={{ display: loginDropdownDisplay }}>
      <div id={styles["options-list"]}>
        <li className={styles["options-element"]}>
          <svg id={styles["login-icon"]} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.791 12.75H3.75C3.336 12.75 3 12.414 3 12C3 11.586 3.336 11.25 3.75 11.25H15.791C16.205 11.25 16.541 11.586 16.541 12C16.541 12.414 16.205 12.75 15.791 12.75Z" fill="#41D0C8" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.8633 15.665C12.6713 15.665 12.4783 15.592 12.3323 15.444C12.0393 15.15 12.0413 14.676 12.3343 14.384L14.7283 12L12.3343 9.61498C12.0413 9.32298 12.0393 8.84898 12.3323 8.55498C12.6253 8.26098 13.0993 8.26098 13.3923 8.55298L16.3213 11.469C16.4633 11.609 16.5423 11.801 16.5423 12C16.5423 12.199 16.4633 12.391 16.3213 12.531L13.3923 15.446C13.2463 15.592 13.0543 15.665 12.8633 15.665Z" fill="#41D0C8" />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.042 22H12.157C9.71803 22 7.73303 20.015 7.73303 17.575V16.633C7.73303 16.219 8.06903 15.883 8.48303 15.883C8.89703 15.883 9.23303 16.219 9.23303 16.633V17.575C9.23303 19.187 10.545 20.5 12.157 20.5H17.042C18.661 20.5 19.978 19.184 19.978 17.564V6.425C19.978 4.813 18.665 3.5 17.053 3.5H12.168C10.55 3.5 9.23303 4.816 9.23303 6.434V7.367C9.23303 7.781 8.89703 8.117 8.48303 8.117C8.06903 8.117 7.73303 7.781 7.73303 7.367V6.434C7.73303 3.989 9.72303 2 12.168 2H17.053C19.492 2 21.478 3.985 21.478 6.425V17.564C21.478 20.01 19.487 22 17.042 22Z" fill="#41D0C8" />
          </svg>
          <a href="/login-signup" style={{ textDecoration: "none", backgroundColor: "transparent", marginLeft: "10%" }}>Login</a>
        </li>
        <li className={styles["options-element"]}>
          <svg id={styles["signup-icon"]} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1_1965" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="2" y="14" width="16" height="8">
              <path fillRule="evenodd" clipRule="evenodd" d="M2 14.4561H17.754V21.795H2V14.4561Z" fill="white" />
            </mask>
            <g mask="url(#mask0_1_1965)">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.877 15.9561C5.646 15.9561 3.5 16.6831 3.5 18.1151C3.5 19.5611 5.646 20.2951 9.877 20.2951C14.108 20.2951 16.254 19.5681 16.254 18.1371C16.254 16.6891 14.108 15.9561 9.877 15.9561ZM9.877 21.7951C7.929 21.7951 2 21.7951 2 18.1151C2 14.8351 6.495 14.4561 9.877 14.4561C11.825 14.4561 17.754 14.4561 17.754 18.1371C17.754 21.4161 13.259 21.7951 9.877 21.7951Z" fill="#41D0C8" />
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.87697 3.5C7.77297 3.5 6.05997 5.213 6.05997 7.318C6.05597 8.337 6.44797 9.292 7.16297 10.013C7.87897 10.733 8.83297 11.132 9.84897 11.136L9.87697 11.886V11.136C11.982 11.136 13.695 9.423 13.695 7.318C13.695 5.213 11.982 3.5 9.87697 3.5ZM9.87697 12.636H9.84597C8.42697 12.631 7.09697 12.074 6.09997 11.07C5.10197 10.065 4.55497 8.731 4.55997 7.315C4.55997 4.386 6.94497 2 9.87697 2C12.81 2 15.195 4.386 15.195 7.318C15.195 10.25 12.81 12.636 9.87697 12.636Z" fill="#41D0C8" />
            <path fillRule="evenodd" clipRule="evenodd" d="M19.2041 13.4297C18.7901 13.4297 18.4541 13.0937 18.4541 12.6797V8.6687C18.4541 8.2547 18.7901 7.9187 19.2041 7.9187C19.6181 7.9187 19.9541 8.2547 19.9541 8.6687V12.6797C19.9541 13.0937 19.6181 13.4297 19.2041 13.4297Z" fill="#41D0C8" />
            <path fillRule="evenodd" clipRule="evenodd" d="M21.25 11.4238H17.16C16.746 11.4238 16.41 11.0878 16.41 10.6738C16.41 10.2598 16.746 9.92383 17.16 9.92383H21.25C21.664 9.92383 22 10.2598 22 10.6738C22 11.0878 21.664 11.4238 21.25 11.4238Z" fill="#41D0C8" />
          </svg>
          <a href="login-signup" style={{ textDecoration: "none", backgroundColor: "transparent", marginLeft: "10%" }}>Sign Up</a>
        </li>
      </div>
    </div>
  );
}

export default LoginDropdown;
