import useGetOrdersOwnerSelectors from "../../hooks/selectors/use-get-orders-owner-selectors";
import useOrdersOwnerListener from "../../components/tables/orders-owner/orders-owner-hooks/use-orders-owner-listener";
import useFetchOrdersOwnerBasedOnPathThunkUseEffect from "../../components/tables/orders-owner/orders-owner-hooks/use-fetch-orders-owner-based-on-path-thunk-use-effect";
import useConfirmMoveToAllTimeOrdersRoute from "./hooks/use-confirm-move-to-all-time-orders-route";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import OrdersOwnerTable from "../../components/tables/orders-owner/orders-owner-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { MinimalButton } from "../../styles/buttons/buttons.styles";

const OrdersOwner = () => {
  const { ordersOwnerIsLoading } = useGetOrdersOwnerSelectors();
  useOrdersOwnerListener();
  useFetchOrdersOwnerBasedOnPathThunkUseEffect();

  const { confirmMoveToAllTimeOrdersRoute } =
    useConfirmMoveToAllTimeOrdersRoute();

  return (
    <Container>
      {ordersOwnerIsLoading ? (
        <SkeletonBox loadingText="Fetching Todays Orders..." />
      ) : null}
      <ParentDiv>
        <Title>todays orders</Title>
        <MinimalButton onClick={confirmMoveToAllTimeOrdersRoute}>
          view all time orders
        </MinimalButton>
      </ParentDiv>
      <OrdersOwnerTable />
    </Container>
  );
};

export default OrdersOwner;
