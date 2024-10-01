import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

const MenuTitleAndLoader = ({ menuIsLoading, cartItemsIsLoading }) => (
  <>
    {menuIsLoading || cartItemsIsLoading ? (
      <SkeletonBox
        loadingText={
          menuIsLoading ? "Fetching Menu..." : "Fetching Cart Items..."
        }
      />
    ) : null}

    <ParentDiv>
      <Title>menu</Title>
    </ParentDiv>
  </>
);

export default MenuTitleAndLoader;
