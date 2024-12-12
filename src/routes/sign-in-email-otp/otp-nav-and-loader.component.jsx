import { Navigate } from "react-router-dom";
import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { menuRoute } from "../../strings/routes/routes-strings";

const OtpNavAndLoader = () => {
  const { currentUser, currentUserIsLoading } = useGetCurrentUserSelectors();

  return (
    <>
      {currentUser && <Navigate replace to={menuRoute} />}

      {currentUserIsLoading ? (
        <SkeletonBox loadingText="Signing You In..." />
      ) : null}
    </>
  );
};

export default OtpNavAndLoader;
