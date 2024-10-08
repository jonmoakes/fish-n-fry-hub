import Balancer from "react-wrap-balancer";

import { BlackText } from "../../../styles/p/p.styles";
import { BlueSpan } from "../../../styles/span/span.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";

const UpdatePriceButton = ({
  newValue,
  attributeDescription,
  confirmUpdateProperty,
  name,
  attributeKey,
  $collectionId,
  $id,
}) => {
  return (
    <>
      {newValue ? (
        <>
          <BlackText>
            <Balancer>
              the new {attributeDescription} for this product will be{" "}
              <BlueSpan>£{Number(newValue / 100).toFixed(2)}</BlueSpan>
            </Balancer>
          </BlackText>
          <YellowGreenButton
            type="button"
            onClick={() =>
              confirmUpdateProperty(
                name,
                attributeDescription,
                newValue,
                attributeKey,
                $collectionId,
                $id
              )
            }
          >
            update {attributeDescription}
          </YellowGreenButton>
        </>
      ) : null}
    </>
  );
};

export default UpdatePriceButton;
