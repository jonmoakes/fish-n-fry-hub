import { Text } from "../../../styles/p/p.styles";
import {
  RequiredSpan,
  YellowShadowSpan,
} from "../../../styles/span/span.styles";

const AttributeInputInstructions = ({ category }) => (
  <>
    <Text>
      the <YellowShadowSpan>{category}</YellowShadowSpan> collection has the
      following attributes which need to be set:
    </Text>
    <Text>please select your choice for each option and then tap upload.</Text>
    <Text>items marked</Text>
    <RequiredSpan>required</RequiredSpan>
    <Text>must be given a value.</Text>
    <Text>
      items not marked as required can be left blank if they are not applicable
      to the product you are creating.
    </Text>
    <Text>
      please note that any inputs which require a{" "}
      <YellowShadowSpan>Price</YellowShadowSpan> should be in{" "}
      <YellowShadowSpan>PENCE</YellowShadowSpan> please, as this is how the
      database needs them.
    </Text>
  </>
);

export default AttributeInputInstructions;
