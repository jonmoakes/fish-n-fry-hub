import useFetchOrdersOwnerFromCurrentDayThunkUseEffect from "./orders-owner-hooks/use-fetch-orders-owner-from-current-day-thunk-use-effect";
import useGetOrdersOwnerSelectors from "../../hooks/selectors/use-get-orders-owner-selectors";
import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

import OrdersOwnerTable from "./orders-owner-table.component";

const OrdersOwner = () => {
  const { ordersOwnerIsLoading } = useGetOrdersOwnerSelectors();

  useFetchOrdersOwnerFromCurrentDayThunkUseEffect();

  return (
    <Container>
      {ordersOwnerIsLoading ? <Loader /> : null}
      <ParentDiv>
        <Title>orders</Title>
      </ParentDiv>
      <OrdersOwnerTable />
    </Container>
  );
};

export default OrdersOwner;
