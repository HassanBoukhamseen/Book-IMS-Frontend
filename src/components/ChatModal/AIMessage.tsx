import React from 'react';
import styles from "./styles.module.css";

interface AIMessageProps {
  message: string;
}

const AIMessage: React.FC<AIMessageProps> = ({ message }) => {
  return (
    <div className={styles["AI-messages-container"]}>
      <div className={styles["AI-messages"]}>
        {message}
      </div>
    </div>
  );
}

export default AIMessage;
