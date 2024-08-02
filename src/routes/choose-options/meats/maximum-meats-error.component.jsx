import { RequiredError } from "../../../styles/p/p.styles";

const MaximumMeatsError = ({
  numberOfMeatsAvailable,
  numberOfMeatsCheckboxesChosen,
}) => (
  <>
    {numberOfMeatsAvailable !== null &&
    numberOfMeatsCheckboxesChosen() > numberOfMeatsAvailable ? (
      <RequiredError>
        please select {numberOfMeatsAvailable} meats
      </RequiredError>
    ) : null}
  </>
);

export default MaximumMeatsError;
