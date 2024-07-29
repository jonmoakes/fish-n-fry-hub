import { useEffect } from "react";

const useConfirmReloadPageUseEffect = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = "You have unsaved changes, do you really want to leave?";
      event.returnValue = message; // Required for some browsers
      return message;
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
};

export default useConfirmReloadPageUseEffect;
