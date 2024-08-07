import { CheckoutOptionsInfoDiv } from "../../../../../../styles/div/div.styles";
import { SalmonSpan } from "../../../../../../styles/span/span.styles";

const AddOnsTitle = ({ hasAnyAddOnOption, hasAnyAddOnOptionButNoneChosen }) => (
  <>
    {hasAnyAddOnOption || hasAnyAddOnOptionButNoneChosen ? (
      <CheckoutOptionsInfoDiv>
        <SalmonSpan>add ons:</SalmonSpan>
      </CheckoutOptionsInfoDiv>
    ) : null}
  </>
);

export default AddOnsTitle;
