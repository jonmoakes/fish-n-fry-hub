import useConfirmUpdatePropertySwals from "../hooks/use-confirm-update-property-swals";
import useManageMenuLogic from "../hooks/use-manage-menu-logic";
import FormInfoAndLabel from "../resuable-components/form-info-and-label.component";
import UpdatePriceButton from "../resuable-components/update-price-button.component";
import UpdatePriceInput from "../resuable-components/update-price-input.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Form } from "../../../styles/form/form.styles";
import { H2 } from "../../../styles/h2/h2.styles";

const SizeOptionTriplePrice = () => {
  const {
    name,
    $id,
    $collectionId,
    sizeOptionTriplePrice,
    handleAttributeChange,
    newValue,
  } = useManageMenuLogic();
  const { confirmUpdateProperty } = useConfirmUpdatePropertySwals();

  const attributeDescription = "triple price";
  const attributeKey = "sizeOptionTriplePrice";
  const propertyValue = sizeOptionTriplePrice;

  return (
    <>
      {sizeOptionTriplePrice ? (
        <ParentDiv>
          <H2>edit triple price</H2>
          <Form className="no-margin-top">
            <FormInfoAndLabel {...{ propertyValue, attributeDescription }} />
            <UpdatePriceInput {...{ newValue, handleAttributeChange }} />

            <UpdatePriceButton
              {...{
                newValue,
                attributeDescription,
                confirmUpdateProperty,
                name,
                attributeKey,
                $collectionId,
                $id,
              }}
            />
          </Form>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default SizeOptionTriplePrice;
