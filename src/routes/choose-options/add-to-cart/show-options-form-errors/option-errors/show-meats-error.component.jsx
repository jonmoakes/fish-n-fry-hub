import useChooseOptionsVariables from "../../../choose-options-hooks/use-choose-options-variables";
import useChooseMeatsFunctions from "../../../meats/meats-hooks/use-choose-meats-functions";

import { RequiredError } from "../../../../../styles/p/p.styles";

const ShowMeatsError = () => {
  const { numberOfMeatsAvailable, singleMeatChosen } =
    useChooseOptionsVariables();
  const { numberOfMeatsCheckboxesChosen } = useChooseMeatsFunctions();

  return (
    <>
      {numberOfMeatsAvailable === 1 && !singleMeatChosen ? (
        <RequiredError>please choose your meat</RequiredError>
      ) : null}

      {numberOfMeatsAvailable > 1 && !numberOfMeatsCheckboxesChosen() ? (
        <RequiredError>please choose your meats</RequiredError>
      ) : null}

      {numberOfMeatsAvailable > 1 &&
      numberOfMeatsCheckboxesChosen() > numberOfMeatsAvailable ? (
        <RequiredError>
          please select a maximum of {numberOfMeatsAvailable} meats
        </RequiredError>
      ) : null}
    </>
  );
};

export default ShowMeatsError;
