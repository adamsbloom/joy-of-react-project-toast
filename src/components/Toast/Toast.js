import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, onClose, children }) {
  const variantStyles = variant ? styles[variant] : "";
  const Icon = variant ? ICONS_BY_VARIANT[variant] : null;

  return (
    <div className={`${styles.toast} ${variantStyles}`}>
      <div className={styles.iconContainer}>{Icon && <Icon size={24} />}</div>
      <p className={styles.content}>
        <VisuallyHidden>{`${variant} -`}</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
        onClick={onClose}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
