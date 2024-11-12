import Balancer from "react-wrap-balancer";

import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { WhiteH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const DBManageButtons = ({
  dbManagementButtons,
  dbManagementForErrorReceivedButtons,
}) => (
  <>
    <ParentDiv>
      <WhiteH2>
        <Balancer>standard database management options:</Balancer>
      </WhiteH2>
      <BlackHr />
      <RenderButtonsList {...{ buttons: dbManagementButtons }} />
    </ParentDiv>

    <ParentDiv>
      <WhiteH2>
        <Balancer>for if you received an error email</Balancer>
      </WhiteH2>
      <BlackHr />
      <RenderButtonsList
        {...{ buttons: dbManagementForErrorReceivedButtons }}
      />
    </ParentDiv>
  </>
);

export default DBManageButtons;
