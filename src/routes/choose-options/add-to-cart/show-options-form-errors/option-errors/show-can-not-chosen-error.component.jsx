import useCanCheck from "../../add-to-cart-hooks/use-can-check";

import { RequiredError } from "../../../../../styles/p/p.styles";

const ShowCanNotChosenError = () => {
  const { canCheckCorrect } = useCanCheck();

  return (
    <>
      {!canCheckCorrect ? (
        <RequiredError>please choose a can</RequiredError>
      ) : null}
    </>
  );
};

export default ShowCanNotChosenError;
