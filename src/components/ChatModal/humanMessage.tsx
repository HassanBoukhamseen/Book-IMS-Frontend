import React from 'react';
import styles from "./styles.module.css";

interface HumanMessageProps {
  message: string;
}

const HumanMessage: React.FC<HumanMessageProps> = ({ message }) => {
  return (
    <div className={styles["human-messages-container"]}>
      <div className={styles["human-messages"]}>
        {message}
      </div>
    </div>
  );
}

export default HumanMessage;
