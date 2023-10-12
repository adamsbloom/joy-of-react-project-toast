import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ messages, onCloseToast }) {
  return (
    <ol className={styles.wrapper}>
      {messages.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} onClose={() => onCloseToast(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
