import { useLocation } from "react-router-dom";

const useResetStore = () => {
  const location = useLocation();
  const path = location.pathname;

  const resetStore = () => {
    switch (path) {
      default:
        return;
    }
  };

  return { resetStore };
};

export default useResetStore;
