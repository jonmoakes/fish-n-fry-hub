import useEditOptionsPricesLogic from "./hooks/use-edit-options-prices-logic";
import useGetOptionsPricesThunkUseEffect from "./hooks/use-get-options-prices-thunk-use-effect";
import useUpdateOptionPriceResultUseEffect from "./hooks/use-update-option-price-result-use-effect";

import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import DonerMeatPrice from "./doner-meat-price.component";
import GratedCheesePrice from "./grated-cheese-price.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import EditOptionsPricesInstructions from "./edit-options-prices-instructions.component";

const DBManageEditOptionsPrices = () => {
  const {
    databaseManagementIsLoading,
    getOptionsPricesError,
    donerMeatPrice,
    gratedCheesePrice,
    newDonerMeatPrice,
    newGratedCheesePrice,
    handleChange,
    resetInputs,
  } = useEditOptionsPricesLogic();

  useGetOptionsPricesThunkUseEffect();
  useUpdateOptionPriceResultUseEffect(resetInputs);

  return (
    <Container>
      <ParentDiv>
        <Title>edit options prices</Title>
        <EditOptionsPricesInstructions />
      </ParentDiv>

      {databaseManagementIsLoading ? (
        <SkeletonBox
          loadingText={
            databaseManagementIsLoading
              ? "Updating Price..."
              : "fetching Options prices"
          }
        />
      ) : getOptionsPricesError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <DonerMeatPrice
            {...{ donerMeatPrice, newDonerMeatPrice, handleChange }}
          />
          <GratedCheesePrice
            {...{ gratedCheesePrice, newGratedCheesePrice, handleChange }}
          />
        </>
      )}
    </Container>
  );
};

export default DBManageEditOptionsPrices;
