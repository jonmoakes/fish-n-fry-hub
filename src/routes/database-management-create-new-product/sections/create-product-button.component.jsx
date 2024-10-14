import Balancer from "react-wrap-balancer";

import useConfirmCreateProduct from "../hooks/use-confirm-create-product";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { Text } from "../../../styles/p/p.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { RequiredSpan } from "../../../styles/span/span.styles";

const CreateProductButton = ({ requiredFieldsCheckPassed }) => {
  const { confirmCreateProduct } = useConfirmCreateProduct();

  return (
    <ParentDiv>
      {requiredFieldsCheckPassed ? (
        <>
          <Text>
            <Balancer>
              by tapping the 'create product' button below, you have confirmed
              that you have checked that all of the data is correct for the
              product you are going to create.
            </Balancer>
          </Text>
          <Text>
            you will have chance to confirm before creating the product.
          </Text>
          <YellowGreenButton type="button" onClick={confirmCreateProduct}>
            create product
          </YellowGreenButton>
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
