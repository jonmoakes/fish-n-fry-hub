import Balancer from "react-wrap-balancer";

import useGetDatabaseManagementSelectors from "../../hooks/selectors/use-get-database-management-selectors";
import useDeleteCartItemsFromDbResultUseEffect from "./upload-order-delete-cart-items-hooks/use-delete-cart-items-from-db-result-use-effect";
import useDeleteCartItemsFromDbThunkUseEffect from "./upload-order-delete-cart-items-hooks/use-delete-cart-items-from-db-thunk-use-effect";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

const UploadOrderDeleteCartItems = () => {
  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();

  useDeleteCartItemsFromDbThunkUseEffect();
  useDeleteCartItemsFromDbResultUseEffect();

  return (
    <Container>
      {databaseManagementIsLoading ? (
        <SkeletonBox loadingText="Removing Cart Items..." />
      ) : null}
      <ParentDiv>
        <Title>
          <Balancer>deleting cart items...</Balancer>
        </Title>
      </ParentDiv>
    </Container>
  );
};

export default UploadOrderDeleteCartItems;
