import { Text } from "../../../styles/p/p.styles";
import { YellowSpan } from "../../../styles/span/span.styles";

const MaximumSaucesError = ({ numberOfCheckboxesChosen }) => (
  <>
    {numberOfCheckboxesChosen() > 3 ? (
      <Text>
        <YellowSpan>please select a maximum of 3 sauces</YellowSpan>
      </Text>
    ) : null}
  </>
);

export default MaximumSaucesError;
