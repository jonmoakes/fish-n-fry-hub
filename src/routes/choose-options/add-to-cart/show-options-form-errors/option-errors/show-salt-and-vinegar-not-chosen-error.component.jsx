import useSaltAndVinegarCheck from "../../add-to-cart-hooks/use-salt-and-vinegar-check";

import { RequiredError } from "../../../../../styles/p/p.styles";
import Balancer from "react-wrap-balancer";

const ShowSaltAndVinegarNotChosenError = () => {
  const { saltAndVinegarCheckCorrect } = useSaltAndVinegarCheck();

  return (
    <>
      {!saltAndVinegarCheckCorrect ? (
        <RequiredError>
          <Balancer>please choose a salt & vinegar option</Balancer>
        </RequiredError>
      ) : null}
    </>
  );
};

export default ShowSaltAndVinegarNotChosenError;
