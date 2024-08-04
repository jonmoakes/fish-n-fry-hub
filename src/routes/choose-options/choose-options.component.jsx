import { Navigate } from "react-router-dom";

import useChooseOptionsVariables from "./choose-options-hooks/use-choose-options-variables";
import useFetchSaucesListThunkUseEffect from "./choose-options-hooks/use-fetch-sauces-list-thunk-use-effect";
import useFetchCansListThunkUseEffect from "./choose-options-hooks/use-fetch-cans-list-thunk-use-effect";
import useFetchGratedCheesePriceThunkUseEffect from "./choose-options-hooks/use-fetch-grated-cheese-price-thunk-use-effect";
import useFetchDonerMeatPriceThunkUseEffect from "./choose-options-hooks/use-fetch-doner-meat-price-thunk-use-effect";
import useFetchMeatsListThunkUseEffect from "./choose-options-hooks/use-fetch-meats-list-thunk-use-effect";
import useFetchCondimentsListThunkUseEffect from "./choose-options-hooks/use-fetch-condiments-list-thunk-use-effect";
import useFetchPiesListThunkUseEffect from "./choose-options-hooks/use-fetch-pies-list-thunk-use-effect";
import useConfirmReloadPageUseEffect from "./choose-options-hooks/use-confirm-reload-page-use-effect";

import Loader from "../../components/loader/loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import ChooseOptionsTitleAndRequiredInfo from "./info/choose-options-title-and-required-info.component";
import ChooseOptionsItemBasicInfo from "./info/choose-options-item-basic-info.component";
import ChooseSize from "./choose-size/choose-size.component";
import CheeseSlice from "./cheese-slice/cheese-slice.component";
import GratedCheese from "./grated-cheese/grated-cheese.component";
import DonerMeat from "./doner-meat/doner-meat.component";
import ChooseSaltAndVinegar from "./choose-salt-and-vinegar/choose-salt-and-vinegar.component";
import Salad from "./salad/salad.component";
import Sauces from "./sauces/sauces.component";
import Meats from "./meats/meats.component";
import Condiments from "./condiments/condiments.component";
import ChooseCan from "./cans/choose-can.component";
import ChoosePie from "./choose-pie/choose-pie.component";
import SpecialInstructions from "./special-instructions/special-instructions.component";
import Quantity from "./quantity/quantity.component";
import TotalPrice from "./total-price/total-price.component";
import AddToCart from "./add-to-cart/add-to-cart.component";

import { Container } from "../../styles/container/container.styles";

import { menuRoute } from "../../strings/routes/routes-strings";

const ChooseOptions = () => {
  const {
    selectedItem,
    optionsPricesIsLoading,
    gratedCheesePriceError,
    donerMeatPriceError,
    saucesDocumentsError,
    canDocumentsError,
    name,
    price,
    cartItemsIsLoading,
  } = useChooseOptionsVariables();

  useFetchGratedCheesePriceThunkUseEffect();
  useFetchDonerMeatPriceThunkUseEffect();
  useFetchSaucesListThunkUseEffect();
  useFetchCansListThunkUseEffect();
  useFetchMeatsListThunkUseEffect();
  useFetchCondimentsListThunkUseEffect();
  useFetchPiesListThunkUseEffect();
  useConfirmReloadPageUseEffect();

  return (
    <Container>
      {!Object.keys(selectedItem).length && <Navigate replace to={menuRoute} />}

      {optionsPricesIsLoading || cartItemsIsLoading ? <Loader /> : null}

      {gratedCheesePriceError ||
      donerMeatPriceError ||
      saucesDocumentsError ||
      canDocumentsError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <ChooseOptionsTitleAndRequiredInfo />
          <ChooseOptionsItemBasicInfo {...{ name, price }} />

          <ChooseSize />
          <ChooseSaltAndVinegar />
          <Sauces />
          <Meats />
          <Condiments />
          <ChooseCan />
          <CheeseSlice />
          <GratedCheese />
          <DonerMeat />
          <Salad />
          <ChoosePie />
          <SpecialInstructions />
          <Quantity />
          <TotalPrice />
          <AddToCart />
        </>
      )}
    </Container>
  );
};

export default ChooseOptions;
