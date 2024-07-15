import { useState } from "react";

const useShouldShowElement = () => {
  const [shouldShowElement, setShouldShowElement] = useState(false);

  const toggleShouldShowElement = () => {
    setShouldShowElement(!shouldShowElement);
  };

  const hideShownElement = () => {
    setShouldShowElement(false);
  };

  return { toggleShouldShowElement, shouldShowElement, hideShownElement };
};

export default useShouldShowElement;
