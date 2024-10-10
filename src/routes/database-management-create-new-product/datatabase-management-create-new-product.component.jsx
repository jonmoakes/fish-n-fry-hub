import CreateProductTitleAndInstructions from "./sections/create-product-title-and-instructions.component";
import ChooseCollection from "./sections/choose-collection.component";
import useCreateProductLogic from "./hooks/use-create-product-logic";
import AttributeInputInstructions from "./sections/attribute-input-instructions.component";
import AttributesDataForm from "./sections/attributes-data-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import CreateProductButton from "./sections/create-product-button.component";

const DBManageCreateNewProduct = () => {
  const {
    handleChange,
    attributes,
    category,
    productToAdd,
    handleChangeCheckbox,
    confirmChangeCategory,
    allChecksPassed,
    addProduct,
  } = useCreateProductLogic();

  return (
    <Container>
      <CreateProductTitleAndInstructions />
      <ChooseCollection
        {...{ category, handleChange, confirmChangeCategory }}
      />

      {attributes ? (
        <>
          <ParentDiv>
            <AttributeInputInstructions {...{ category }} />

            <AttributesDataForm
              {...{
                attributes,
                productToAdd,
                handleChangeCheckbox,
                handleChange,
              }}
            />
          </ParentDiv>

          <CreateProductButton {...{ allChecksPassed, addProduct }} />
        </>
      ) : null}
    </Container>
  );
};

export default DBManageCreateNewProduct;
