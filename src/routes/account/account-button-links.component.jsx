import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useNavigateToRoute from "./account-hooks/use-navigate-to-route";

import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";

import { ParentDiv } from "../../styles/div/div.styles";

import { appOwnerId } from "../../constants/constants";

const AccountButtonLinks = () => {
  const { id } = useGetCurrentUserSelectors();
  const { appOwnerButtons, notAppOwnerButtons } = useNavigateToRoute();

  return (
    <>
      {id === appOwnerId ? (
        <ParentDiv>
          <RenderButtonsList {...{ buttons: appOwnerButtons }} />
        </ParentDiv>
      ) : (
        <ParentDiv>
          <RenderButtonsList {...{ buttons: notAppOwnerButtons }} />
        </ParentDiv>
      )}
    </>
  );
};

export default AccountButtonLinks;
