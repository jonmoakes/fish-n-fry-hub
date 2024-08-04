import useChooseOptionsVariables from "../../../choose-options-hooks/use-choose-options-variables";
import useChooseSaucesFunctions from "../../../sauces/sauces-hooks/use-choose-sauces-functions";

import { RequiredError } from "../../../../../styles/p/p.styles";

const ShowSaucesError = () => {
  const { numberOfSaucesAvailable, singleSauceChosen } =
    useChooseOptionsVariables();
  const { numberOfSaucesCheckboxesChosen } = useChooseSaucesFunctions();

  return (
    <>
      {numberOfSaucesAvailable === 1 && !singleSauceChosen ? (
        <RequiredError>please choose your sauce</RequiredError>
      ) : null}

      {numberOfSaucesAvailable > 1 && !numberOfSaucesCheckboxesChosen() ? (
        <RequiredError>please choose your sauces</RequiredError>
      ) : null}

      {numberOfSaucesAvailable > 1 &&
      numberOfSaucesCheckboxesChosen() > numberOfSaucesAvailable ? (
        <RequiredError>
          please select a maximum of {numberOfSaucesAvailable} sauces
        </RequiredError>
      ) : null}
    </>
  );
};

export default ShowSaucesError;
