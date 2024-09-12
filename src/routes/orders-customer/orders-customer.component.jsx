import useGetOrdersCustomerSelectors from "../../hooks/selectors/use-get-orders-customer-selectors";

import useFetchOrdersCustomerThunkUseEffect from "./orders-customer-hooks/use-fetch-orders-customer-thunk-use-effect";

import Loader from "../../components/loader/loader.component";
import OrdersCustomerTable from "./orders-customer-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

const OrdersCustomer = () => {
  const { ordersCustomerIsLoading } = useGetOrdersCustomerSelectors();
  useFetchOrdersCustomerThunkUseEffect();

  return (
    <Container>
      {ordersCustomerIsLoading ? <Loader /> : null}
      <ParentDiv>
        <Title>your orders</Title>
      </ParentDiv>
      <OrdersCustomerTable />
    </Container>
  );
};

export default OrdersCustomer;
