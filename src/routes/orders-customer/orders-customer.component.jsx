import useGetOrdersCustomerSelectors from "../../hooks/selectors/use-get-orders-customer-selectors";

import useFetchOrdersCustomerThunkUseEffect from "./orders-customer-hooks/use-fetch-orders-customer-thunk-use-effect";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import OrdersCustomerTable from "./orders-customer-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

const OrdersCustomer = () => {
  const { ordersCustomerIsLoading } = useGetOrdersCustomerSelectors();
  useFetchOrdersCustomerThunkUseEffect();

  return (
    <Container>
      {ordersCustomerIsLoading ? (
        <SkeletonBox loadingText="Fetching Your Orders..." />
      ) : null}
      <ParentDiv>
        <Title>your orders</Title>
      </ParentDiv>
      <OrdersCustomerTable />
    </Container>
  );
};

export default OrdersCustomer;
