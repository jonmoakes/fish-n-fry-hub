import useGetOrderToRepeatSelectors from "../../hooks/selectors/use-get-order-to-repeat-selectors";
import useGetOrderToRepeatThunkUseEffect from "./repeat-order-hooks/use-get-order-to-repeat-thunk-use-effect";

import Loader from "../../components/loader/loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";

import NoRepeatOrderFound from "./no-repeat-order-found.component";
import RepeatOrderTitleAndInfo from "./repeat-order-title-and-info.component";

import RepeatOrderDetails from "./repeat-order-details.component";

import { Container } from "../../styles/container/container.styles";

const RepeatOrder = () => {
  const { orderToRepeatIsLoading, orderToRepeatError, orderToRepeatDetails } =
    useGetOrderToRepeatSelectors();

  useGetOrderToRepeatThunkUseEffect();

  return (
    <Container>
      {orderToRepeatIsLoading ? <Loader /> : null}

      {orderToRepeatError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <RepeatOrderTitleAndInfo />

          {orderToRepeatDetails && Object.keys(orderToRepeatDetails).length ? (
            <>
              <RepeatOrderDetails {...{ orderToRepeatDetails }} />
            </>
          ) : (
            <NoRepeatOrderFound />
          )}
        </>
      )}
    </Container>
  );
};

export default RepeatOrder;
