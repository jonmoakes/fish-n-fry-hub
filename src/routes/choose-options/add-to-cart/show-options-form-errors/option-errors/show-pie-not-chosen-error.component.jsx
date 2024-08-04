import usePieCheck from "../../add-to-cart-hooks/use-pie-check";

import { RequiredError } from "../../../../../styles/p/p.styles";

const ShowPieNotChosenError = () => {
  const { pieCheckCorrect } = usePieCheck();

  return (
    <>
      {!pieCheckCorrect ? (
        <RequiredError>please choose a pie</RequiredError>
      ) : null}
    </>
  );
};

export default ShowPieNotChosenError;
