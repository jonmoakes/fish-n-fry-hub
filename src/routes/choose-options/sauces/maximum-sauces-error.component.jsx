import { RequiredError } from "../../../styles/p/p.styles";

const MaximumSaucesError = ({
  numberOfSaucesAvailable,
  numberOfSaucesCheckboxesChosen,
}) => (
  <>
    {numberOfSaucesAvailable !== null &&
    numberOfSaucesCheckboxesChosen() > numberOfSaucesAvailable ? (
      <RequiredError>
        please select a maximum of {numberOfSaucesAvailable} condiments
      </RequiredError>
    ) : null}
  </>
);

export default MaximumSaucesError;
