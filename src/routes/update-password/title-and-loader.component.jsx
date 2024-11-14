import Balancer from "react-wrap-balancer";

import useGetGenerateNewPasswordRequestSelectors from "../../hooks/selectors/use-get-generate-new-password-request-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { Title } from "../../styles/h1/h1.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const TitleAndLoader = () => {
  const { generateNewPasswordRequestIsLoading } =
    useGetGenerateNewPasswordRequestSelectors();

  return (
    <>
      {generateNewPasswordRequestIsLoading ? (
        <SkeletonBox loadingText="please wait..." />
      ) : null}
      <ParentDiv>
        <Title>
          <Balancer>update your password</Balancer>
        </Title>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
