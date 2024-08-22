import Loader from "../../components/loader/loader.component";
import useGetOrdersOwnerSelectors from "../../hooks/selectors/use-get-orders-owner-selectors";
import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import useFetchOrdersOwnerAllOrdersThunkUseEffect from "./orders-owner-hooks/use-fetch-orders-owner-all-orders-thunk-use-effect";
import OrdersOwnerTable from "./orders-owner-table.component";

const OrdersOwner = () => {
  useFetchOrdersOwnerAllOrdersThunkUseEffect();
  const { ordersOwnerIsLoading } = useGetOrdersOwnerSelectors();
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
