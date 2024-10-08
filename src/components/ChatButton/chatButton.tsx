import React from 'react';
import styles from "./styles.module.css";

interface ChatButtonProps {
  modalDisplay: string;
  setModalDisplay: React.Dispatch<React.SetStateAction<string>>;
}

function showModal(modalDisplay: string, setModalDisplay: React.Dispatch<React.SetStateAction<string>>): void {
  setModalDisplay(modalDisplay === "none" ? "flex" : "none");
}

const ChatButton: React.FC<ChatButtonProps> = ({ modalDisplay, setModalDisplay }) => {
  return (
    <div onClick={() => showModal(modalDisplay, setModalDisplay)} id={styles["chat-button"]}>
      <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="62" height="62" rx="8" fill="#15171B"/>
        <mask id="mask0_10_6859" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="2" y="2" width="57" height="57">
          <path fillRule="evenodd" clipRule="evenodd" d="M2.5835 2.58411H58.1071V58.1098H2.5835V2.58411Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_10_6859)">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.7803 50.8279C17.2786 50.8279 18.6917 51.3962 20.1875 51.9981C29.3505 56.2348 40.1876 54.3076 47.2479 47.2499C56.5634 37.9293 56.5634 22.7677 47.2479 13.4522C42.7374 8.94169 36.7389 6.45911 30.3529 6.45911C23.9643 6.45911 17.9632 8.94427 13.4553 13.4548C6.39246 20.5124 4.47046 31.3495 8.66838 40.4248C9.27288 41.9205 9.85671 43.3775 9.85671 44.8914C9.85671 46.4026 9.33746 47.9242 8.88021 49.2675C8.50304 50.3732 7.93213 52.042 8.29896 52.4089C8.65804 52.7809 10.3372 52.1944 11.4455 51.8147C12.7759 51.36 14.2845 50.8382 15.7803 50.8279ZM30.2883 58.1103C26.341 58.1103 22.3678 57.2759 18.6504 55.5554C17.555 55.1162 16.5295 54.7029 15.7932 54.7029C14.9459 54.708 13.8066 55.1007 12.7061 55.4804C10.4483 56.2554 7.63763 57.2216 5.55804 55.1498C3.48621 53.0754 4.44204 50.2724 5.21188 48.0172C5.59163 46.9064 5.98171 45.7594 5.98171 44.8914C5.98171 44.1784 5.63813 43.269 5.11113 41.9593C0.272542 31.5097 2.50971 18.9159 10.717 10.7139C15.956 5.47227 22.9284 2.58411 30.3503 2.58411C37.7722 2.58411 44.7472 5.46969 49.9862 10.7113C60.8155 21.5406 60.8155 39.1589 49.9862 49.9883C44.6775 55.2996 37.5294 58.1103 30.2883 58.1103Z" fill="#F7F5FF"/>
        </g>
        <path fillRule="evenodd" clipRule="evenodd" d="M40.5487 34.0044C39.1227 34.0044 37.9551 32.8497 37.9551 31.4211C37.9551 29.9925 39.0995 28.8378 40.5255 28.8378H40.5487C41.9747 28.8378 43.1321 29.9925 43.1321 31.4211C43.1321 32.8497 41.9747 34.0044 40.5487 34.0044Z" fill="#F7F5FF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M30.1928 34.0044C28.7668 34.0044 27.5991 32.8497 27.5991 31.4211C27.5991 29.9925 28.741 28.8378 30.1695 28.8378H30.1928C31.6188 28.8378 32.7761 29.9925 32.7761 31.4211C32.7761 32.8497 31.6188 34.0044 30.1928 34.0044Z" fill="#F7F5FF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M19.8359 34.0044C18.4099 34.0044 17.2422 32.8497 17.2422 31.4211C17.2422 29.9925 18.3866 28.8378 19.8126 28.8378H19.8359C21.2619 28.8378 22.4192 29.9925 22.4192 31.4211C22.4192 32.8497 21.2619 34.0044 19.8359 34.0044Z" fill="#F7F5FF"/>
      </svg>
    </div>
  );
}

export default ChatButton;
