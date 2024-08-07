import { CheckoutOptionsInfoDiv } from "../../../../../../styles/div/div.styles";
import { SalmonSpan } from "../../../../../../styles/span/span.styles";

const AddOnsTitle = ({
  hasAnyAddOnOptionBeenChosen,
  hasAnyAddOnOptionButNoneChosen,
}) => (
  <>
    {hasAnyAddOnOptionBeenChosen || hasAnyAddOnOptionButNoneChosen ? (
      <CheckoutOptionsInfoDiv>
        <SalmonSpan>add ons:</SalmonSpan>
      </CheckoutOptionsInfoDiv>
    ) : null}
  </>
);

export default AddOnsTitle;
