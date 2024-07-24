import useChooseOptionsVariables from "./choose-options-hooks/use-choose-options-variables";
import useFetchOptionsPricesThunkUseEffect from "./choose-options-hooks/use-fetch-options-prices-thunk-use-effect";

import Loader from "../../components/loader/loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import ChooseOptionsTitleAndRequiredInfo from "./choose-options-title-and-required-info.component";
import ChooseOptionsItemBasicInfo from "./choose-options-item-basic-info.component";
import ChooseSize from "./choose-size/choose-size.component";
import CheeseSlice from "./cheese-slice/cheese-slice.component";
import GratedCheese from "./grated-cheese/grated-cheese.component";
import DonerMeat from "./doner-meat/doner-meat.component";
import Quantity from "./quantity/quantity.component";
import TotalPrice from "./total-price/total-price.component";
import AddToCart from "./add-to-cart/add-to-cart.component";

import { Container } from "../../styles/container/container.styles";

const ChooseOptions = () => {
  useFetchOptionsPricesThunkUseEffect();
  const {
    optionsPricesIsLoading,
    optionsPricesError,
    name,
    price,
    hasSizeOption,
    chosenSize,
  } = useChooseOptionsVariables();

  return (
    <Container>
      {optionsPricesIsLoading ? <Loader /> : null}

      {optionsPricesError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <ChooseOptionsTitleAndRequiredInfo />
          <ChooseOptionsItemBasicInfo {...{ name, price }} />

          {hasSizeOption ? <ChooseSize /> : null}

          {!hasSizeOption || (hasSizeOption && chosenSize) ? (
            <>
              <CheeseSlice />
              <GratedCheese />
              <DonerMeat />
              <Quantity />
              <TotalPrice />
              <AddToCart />
            </>
          ) : null}
        </>
      )}
    </Container>
  );
};

export default ChooseOptions;
