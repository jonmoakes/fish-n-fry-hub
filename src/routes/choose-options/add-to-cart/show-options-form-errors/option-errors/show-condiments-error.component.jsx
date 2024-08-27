import useChooseOptionsVariables from "../../../choose-options-hooks/use-choose-options-variables";
import useChooseCondimentsFunctions from "../../../condiments/condiments-hooks/use-choose-condiments-functions";

import { RequiredError } from "../../../../../styles/p/p.styles";

const ShowCondimentsError = () => {
  const { numberOfCondimentsAvailable, singleCondimentChosen } =
    useChooseOptionsVariables();
  const { numberOfCondimentsCheckboxesChosen } = useChooseCondimentsFunctions();

  return (
    <>
      {numberOfCondimentsAvailable === 1 && !singleCondimentChosen ? (
        <RequiredError>please choose your condiment</RequiredError>
      ) : null}

      {numberOfCondimentsAvailable > 1 &&
      numberOfCondimentsCheckboxesChosen() !== numberOfCondimentsAvailable ? (
        <RequiredError>
          please select {numberOfCondimentsAvailable} condiments
        </RequiredError>
      ) : null}
    </>
  );
};

export default ShowCondimentsError;
