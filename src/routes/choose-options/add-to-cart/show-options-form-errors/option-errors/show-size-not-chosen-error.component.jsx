import useSizeCheck from "../../add-to-cart-hooks/use-size-check";

import { RequiredError } from "../../../../../styles/p/p.styles";

const ShowSizeNotChosenError = () => {
  const { sizeCheckCorrect } = useSizeCheck();

  return (
    <>
      {!sizeCheckCorrect ? (
        <RequiredError>please choose a size</RequiredError>
      ) : null}
    </>
  );
};

export default ShowSizeNotChosenError;
