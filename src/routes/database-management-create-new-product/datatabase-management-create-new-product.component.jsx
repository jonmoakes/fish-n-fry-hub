import CreateProductTitleAndInstructions from "./sections/create-product-title-and-instructions.component";
import ChooseCollection from "./sections/choose-collection.component";
import useCreateProductLogic from "./hooks/use-create-product-logic";
import AttributeInputInstructions from "./sections/attribute-input-instructions.component";
import AttributesDataForm from "./sections/attributes-data-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const DBManageCreateNewProduct = () => {
  const {
    handleChange,
    attributes,
    category,
    productToAdd,
    handleChangeCheckbox,
  } = useCreateProductLogic();

  return (
    <Container>
      <CreateProductTitleAndInstructions />
      <ChooseCollection {...{ handleChange }} />

      {attributes ? (
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
      ) : null}
    </Container>
  );
};

export default DBManageCreateNewProduct;
