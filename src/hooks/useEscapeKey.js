import React from "react";

export const useEscapeKey = (onEscapeKey) => {
  const handleEscape = React.useCallback(
    (event) => {
      if (event.code === "Escape") {
        onEscapeKey();
      }
    },
    [onEscapeKey]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [handleEscape]);
};
