import Balancer from "react-wrap-balancer";

import RequiredInfoText from "./required-info-text.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

const ChooseOptionsTitleAndRequiredInfo = () => (
  <>
    <ParentDiv>
      <Title>
        <Balancer>choose options</Balancer>
      </Title>
    </ParentDiv>
    <ParentDiv>
      <RequiredInfoText />
    </ParentDiv>
  </>
);

export default ChooseOptionsTitleAndRequiredInfo;
