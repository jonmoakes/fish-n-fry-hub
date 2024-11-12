import Balancer from "react-wrap-balancer";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowShadowSpan } from "../../styles/span/span.styles";

const DBManageTitleLoaderIntro = ({ databaseManagementIsLoading }) => (
  <>
    <ParentDiv>
      <Title>database management</Title>
    </ParentDiv>

    {databaseManagementIsLoading ? (
      <SkeletonBox loadingText="Checking..." />
    ) : null}

    <ParentDiv>
      <Text>
        <Balancer>
          here, you can view and update data in your database.
        </Balancer>
      </Text>

      <Text>
        <Balancer>
          <YellowShadowSpan>
            please note, editing the database can break the app if not done
            correctly!
          </YellowShadowSpan>
        </Balancer>
      </Text>
    </ParentDiv>
  </>
);

export default DBManageTitleLoaderIntro;
