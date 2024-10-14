import Balancer from "react-wrap-balancer";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { Text } from "../../../styles/p/p.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { RequiredSpan } from "../../../styles/span/span.styles";
import useConfirmCreateProduct from "../hooks/use-confirm-create-product";
import { useState } from "react";

const CreateProductButton = ({ allChecksPassed }) => {
  const { confirmCreateProduct } = useConfirmCreateProduct();
  const [showFinalButton, setShowFinalButton] = useState(false);

  return (
    <ParentDiv>
      {allChecksPassed() ? (
        <>
          {!showFinalButton ? (
            <>
              <Text>the product looks good to upload!</Text>
              <Text>
                have you double checked all of the data required to create this
                product?
              </Text>

              <YellowGreenButton onClick={() => setShowFinalButton(true)}>
                yes i've checked
              </YellowGreenButton>
            </>
          ) : (
            <>
              <Text>
                you have confirmed that you have checked all of the data. tap
                the button below to continue.
              </Text>
              <Text>
                you will have chance to confirm before creating the product.
              </Text>
              <YellowGreenButton type="button" onClick={confirmCreateProduct}>
                create product
              </YellowGreenButton>
            </>
          )}
        </>
      ) : (
        <>
          <Text>some fields that are marked</Text>
          <Text>
            <RequiredSpan>required</RequiredSpan>
          </Text>
          <Text>have not been given values yet.</Text>
          <Text>
            <Balancer>
              once all required fields have values, the button to create the
              product will appear.
            </Balancer>
          </Text>
        </>
      )}
    </ParentDiv>
  );
};

export default CreateProductButton;
