import { useState } from "react";
import useGetOrderToRepeatSelectors from "../../hooks/selectors/use-get-order-to-repeat-selectors";
import useGetOrderToRepeatThunkUseEffect from "./repeat-order-hooks/use-get-order-to-repeat-thunk-use-effect";

import Loader from "../../components/loader/loader.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";

import NoRepeatOrderFound from "./no-repeat-order-found.component";
import RepeatOrderTitleAndInfo from "./repeat-order-title-and-info.component";

import RepeatOrderDetails from "./repeat-order-details.component";
import DetailsCorrectButton from "./details-correct-button.component";
import { Container } from "../../styles/container/container.styles";

const RepeatOrder = () => {
  const {
    orderToRepeatIsLoading,
    orderToRepeatError,
    orderToRepeatDetails,
    repeatOrderForDisplayingToUser,
  } = useGetOrderToRepeatSelectors();
  useGetOrderToRepeatThunkUseEffect();

  const [showPaymentForm, setShowPaymentForm] = useState(false);

  return (
    <Container>
      {orderToRepeatIsLoading ? <Loader /> : null}

      {orderToRepeatError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <RepeatOrderTitleAndInfo />

          {orderToRepeatDetails ? (
            <>
              <RepeatOrderDetails {...{ repeatOrderForDisplayingToUser }} />
              <DetailsCorrectButton
                {...{ showPaymentForm, setShowPaymentForm }}
              />
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
