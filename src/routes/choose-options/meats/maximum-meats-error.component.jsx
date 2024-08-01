import { Text } from "../../../styles/p/p.styles";
import { YellowSpan } from "../../../styles/span/span.styles";

const MaximumMeatsError = ({
  numberOfMeatsCheckboxesChosen,
  numberOfMeatsAvailable,
}) => (
  <>
    {numberOfMeatsCheckboxesChosen() > 2 ? (
      <Text>
        <YellowSpan>please select a maximum of 2 meats</YellowSpan>
      </Text>
    ) : null}
  </>
);

export default MaximumMeatsError;
