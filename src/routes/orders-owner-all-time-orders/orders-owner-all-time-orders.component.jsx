import useGetOrdersOwnerSelectors from "../../hooks/selectors/use-get-orders-owner-selectors";
import useOrdersOwnerListener from "../../components/tables/orders-owner/orders-owner-hooks/use-orders-owner-listener";
import useFetchOrdersOwnerBasedOnPathThunkUseEffect from "../../components/tables/orders-owner/orders-owner-hooks/use-fetch-orders-owner-based-on-path-thunk-use-effect";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import OrdersOwnerTable from "../../components/tables/orders-owner/orders-owner-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { MinimalButton } from "../../styles/buttons/buttons.styles";
import { ordersOwnerRoute } from "../../strings/routes/routes-strings";

const OrdersOwnerAllTimeOrders = () => {
  const { ordersOwnerIsLoading, formattedOrdersOwner } =
    useGetOrdersOwnerSelectors();
  useOrdersOwnerListener();
  useFetchOrdersOwnerBasedOnPathThunkUseEffect();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <Container>
      {ordersOwnerIsLoading ? (
        <SkeletonBox loadingText="Fetching All Time Orders..." />
      ) : null}
      <ParentDiv>
        <Title>all orders ever made</Title>
        <MinimalButton
          className="margin"
          onClick={() => hamburgerHandlerNavigate(ordersOwnerRoute)}
        >
          view just todays orders
        </MinimalButton>
        {formattedOrdersOwner.length > 1000 ? (
          <>
            <Text>
              please note that for performance reasons, this list is limited to
              1000 orders.
            </Text>
            <Text>
              if you require orders from further back, please contact jonathan.
            </Text>
          </>
        ) : null}
      </ParentDiv>
      <OrdersOwnerTable />
    </Container>
  );
};

export default OrdersOwnerAllTimeOrders;
