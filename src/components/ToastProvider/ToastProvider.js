import React from "react";
import { useEscapeKey } from "../../hooks";

export const ToastContext = React.createContext({
  toasts: [],
  addToast: () => {
    return;
  },
  removeToast: () => {
    return;
  },
});

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((message, variant) => {
    setToasts((toasts) => [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]);
  }, []);

  const removeToast = React.useCallback(
    (id) => {
      const nextToasts = toasts.filter((toast) => toast.id !== id);
      setToasts(nextToasts);
    },
    [toasts]
  );

  const value = React.useMemo(() => {
    return {
      toasts,
      addToast,
      removeToast,
    };
  }, [toasts, addToast, removeToast]);

  const clearToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(clearToasts);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
