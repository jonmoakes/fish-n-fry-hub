import { Navigate } from "react-router-dom";

import useChooseOptionsVariables from "./choose-options-hooks/use-choose-options-variables";
import useFetchOptionsPricesThunkUseEffect from "./choose-options-hooks/use-fetch-options-prices-thunk-use-effect";
import useConfirmReloadPageUseEffect from "./choose-options-hooks/use-confirm-reload-page-use-effect";

import Loader from "../../components/loader/loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import ChooseOptionsTitleAndRequiredInfo from "./choose-options-title-and-required-info.component";
import ChooseOptionsItemBasicInfo from "./choose-options-item-basic-info.component";
import ChooseSize from "./choose-size/choose-size.component";
import CheeseSlice from "./cheese-slice/cheese-slice.component";
import GratedCheese from "./grated-cheese/grated-cheese.component";
import DonerMeat from "./doner-meat/doner-meat.component";
import ChooseSaltAndVinegar from "./choose-salt-and-vinegar/choose-salt-and-vinegar.component";
import Salad from "./salad/salad.component";
import Sauces from "./sauces/sauces.component";
import Condiments from "./condiments/condiments.component";
import ChooseCan from "./cans/choose-can.component";
import Quantity from "./quantity/quantity.component";
import TotalPrice from "./total-price/total-price.component";
import AddToCart from "./add-to-cart/add-to-cart.component";

import { Container } from "../../styles/container/container.styles";

import { menuRoute } from "../../strings/routes/routes-strings";

const ChooseOptions = () => {
  const {
    selectedItem,
    optionsPricesIsLoading,
    optionsPricesError,
    name,
    price,
    hasSizeOption,
    sizeChoice,
    canDocumentsError,
  } = useChooseOptionsVariables();

  useFetchOptionsPricesThunkUseEffect();
  useConfirmReloadPageUseEffect();

  return (
    <Container>
      {!Object.keys(selectedItem).length && <Navigate replace to={menuRoute} />}

      {optionsPricesIsLoading ? <Loader /> : null}

      {optionsPricesError || canDocumentsError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <ChooseOptionsTitleAndRequiredInfo />
          <ChooseOptionsItemBasicInfo {...{ name, price }} />

          {hasSizeOption ? <ChooseSize /> : null}

          {!hasSizeOption || (hasSizeOption && sizeChoice) ? (
            <>
              <ChooseSaltAndVinegar />
              <Sauces />
              <Condiments />
              <ChooseCan />
              <CheeseSlice />
              <GratedCheese />
              <DonerMeat />
              <Salad />
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
