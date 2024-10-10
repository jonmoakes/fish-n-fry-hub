import Balancer from "react-wrap-balancer";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { Text } from "../../../styles/p/p.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { RequiredSpan } from "../../../styles/span/span.styles";

const CreateProductButton = ({ allChecksPassed, addProduct }) => {
  return (
    <ParentDiv>
      {allChecksPassed() ? (
        <YellowGreenButton type="button" onClick={addProduct}>
          create product
        </YellowGreenButton>
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
