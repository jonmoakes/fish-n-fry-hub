import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import {
  SkeletonContainer,
  SkeletonDiv,
  SkeletonWrapper,
} from "../../styles/div/div.styles";
import { LoadingText } from "../../styles/p/p.styles";

const SkeletonBox = ({ loadingText = "Please Wait..." }) => {
  return (
    <SkeletonDiv>
      <SkeletonTheme
        baseColor="#265DA6"
        highlightColor="#ffff00"
        borderRadius="50px"
        duration={1.5}
      >
        <SkeletonContainer>
          <SkeletonWrapper>
            <Skeleton count={3} height={30} containerClassName="flex-1" />
          </SkeletonWrapper>
          <LoadingText>{loadingText}</LoadingText>
        </SkeletonContainer>
      </SkeletonTheme>
    </SkeletonDiv>
  );
};

export default SkeletonBox;
