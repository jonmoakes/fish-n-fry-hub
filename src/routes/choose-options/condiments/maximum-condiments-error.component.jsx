import { RequiredError } from "../../../styles/p/p.styles";

const MaximumCondimentsError = ({
  numberOfCondimentsAvailable,
  numberOfCondimentsCheckboxesChosen,
}) => (
  <>
    {numberOfCondimentsAvailable !== null &&
    numberOfCondimentsCheckboxesChosen() > numberOfCondimentsAvailable ? (
      <RequiredError>
        please select a maximum of {numberOfCondimentsAvailable} condiments
      </RequiredError>
    ) : null}
  </>
);

export default MaximumCondimentsError;
