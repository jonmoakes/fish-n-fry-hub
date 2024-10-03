import useConfirmUpdateProperty from "../hooks/use-confirm-update-property";
import useManageMenuLogic from "../hooks/use-manage-menu-logic";

import FormInfoAndLabel from "../resuable-components/form-info-and-label.component";
import UpdatePriceInput from "../resuable-components/update-price-input.component";
import UpdatePriceButton from "../resuable-components/update-price-button.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Form } from "../../../styles/form/form.styles";
import { H2 } from "../../../styles/h2/h2.styles";

const BasePrice = () => {
  const { $id, $collectionId, price, handleAttributeChange, newValue } =
    useManageMenuLogic();
  const { confirmUpdateProperty } = useConfirmUpdateProperty();

  const attributeDescription = "base";
  const attributeKey = "price";
  const propertyValue = price;

  return (
    <ParentDiv>
      <H2>edit base price</H2>
      <Form className="no-margin-top">
        <FormInfoAndLabel {...{ propertyValue, attributeDescription }} />
        <UpdatePriceInput {...{ newValue, handleAttributeChange }} />

        <UpdatePriceButton
          {...{
            newValue,
            attributeDescription,
            confirmUpdateProperty,
            attributeKey,
            $collectionId,
            $id,
          }}
        />
      </Form>
    </ParentDiv>
  );
};

export default BasePrice;
