import { Text } from "../../../styles/p/p.styles";
import { YellowSpan } from "../../../styles/span/span.styles";

const MaximumCondimentsError = ({
  numberOfCondimentsAvailable,
  numberOfCondimentsCheckboxesChosen,
}) => (
  <>
    {numberOfCondimentsAvailable === 2 &&
    numberOfCondimentsCheckboxesChosen() > 2 ? (
      <Text>
        <YellowSpan>please select a maximum 2 condiments</YellowSpan>
      </Text>
    ) : null}
  </>
);

export default MaximumCondimentsError;
