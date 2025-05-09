import useCreateProductResultSwalUseEffect from "./hooks/use-create-product-result-swal-use-effect";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import CreateProductTitleAndInstructions from "./sections/create-product-title-and-instructions.component";
import ChooseCollection from "./sections/choose-collection.component";
import useCreateProductLogic from "./hooks/use-create-product-logic";
import AttributeInputInstructions from "./sections/attribute-input-instructions.component";
import AttributesDataForm from "./sections/attributes-data-form.component";
import CreateProductButton from "./sections/create-product-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const DBManageCreateNewProduct = () => {
  useCreateProductResultSwalUseEffect();
  const {
    databaseManagementIsLoading,
    handleChange,
    attributes,
    category,
    productToAdd,
    handleChangeCheckbox,
    confirmChangeCategory,
    requiredFieldsCheckPassed,
  } = useCreateProductLogic();

  return (
    <Container>
      {databaseManagementIsLoading ? (
        <SkeletonBox loadingText={"Creating Product..."} />
      ) : null}
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

          <CreateProductButton {...{ requiredFieldsCheckPassed }} />
        </>
      ) : null}
    </Container>
  );
};

export default DBManageCreateNewProduct;
