import Loader from "../../components/loader/loader.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

const MenuTitleAndLoader = ({ menuIsLoading, cartItemsIsLoading }) => (
  <>
    {menuIsLoading || cartItemsIsLoading ? <Loader /> : null}

    <ParentDiv>
      <Title>menu</Title>
    </ParentDiv>
  </>
);

export default MenuTitleAndLoader;
