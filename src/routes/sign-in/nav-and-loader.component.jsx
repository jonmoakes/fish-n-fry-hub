import { Navigate } from "react-router-dom";

import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { appOwnerId } from "../../constants/constants";
import { accountRoute, menuRoute } from "../../strings/routes/routes-strings";

const NavAndLoader = () => {
  const { currentUser, currentUserIsLoading, id } =
    useGetCurrentUserSelectors();

  return (
    <>
      {currentUser &&
        (id === appOwnerId ? (
          <Navigate replace to={accountRoute} />
        ) : (
          <Navigate replace to={menuRoute} />
        ))}
      {currentUserIsLoading ? (
        <SkeletonBox loadingText="Signing You In..." />
      ) : null}
    </>
  );
};

export default NavAndLoader;
