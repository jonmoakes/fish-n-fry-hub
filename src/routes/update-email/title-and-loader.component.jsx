import Balancer from "react-wrap-balancer";

import useGetUpdateEmailSelectors from "../../hooks/selectors/use-get-update-email-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

const TitleAndLoader = () => {
  const { updateEmailIsLoading } = useGetUpdateEmailSelectors();

  return (
    <>
      {updateEmailIsLoading ? (
        <SkeletonBox loadingText="updating your email..." />
      ) : null}
      <ParentDiv>
        <Title>
          <Balancer>update your email address</Balancer>
        </Title>
      </ParentDiv>
    </>
  );
};

export default TitleAndLoader;
