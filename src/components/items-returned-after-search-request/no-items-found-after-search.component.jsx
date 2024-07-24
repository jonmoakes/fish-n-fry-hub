import Balancer from "react-wrap-balancer";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackText } from "../../styles/p/p.styles";

const NoItemsFoundAfterSearch = () => (
  <ParentDiv className="no-result-found left">
    <BlackText>no result found..</BlackText>
    <BlackText>
      <Balancer>please try changing your search query.</Balancer>
    </BlackText>
  </ParentDiv>
);

export default NoItemsFoundAfterSearch;
