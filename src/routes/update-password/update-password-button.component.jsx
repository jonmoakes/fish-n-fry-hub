import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useConfirmUpdatePassword from "./update-password-hooks/use-confirm-update-password";
import useIsOnline from "../../hooks/use-is-online";

import NetworkError from "../../components/errors/network-error.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowShadowSpan } from "../../styles/span/span.styles";

const UpdatePasswordButton = () => {
  const { email } = useGetCurrentUserSelectors();
  const { isOnline } = useIsOnline();
  const { confirmUpdatePassword } = useConfirmUpdatePassword();

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : email ? (
        <>
          <Text>
            the email address that we will send your password reset link to is:
          </Text>
          <Text>
            <YellowShadowSpan className="email">{email}</YellowShadowSpan>
          </Text>
          <BlackHr />

          <YellowGreenButton type="button" onClick={confirmUpdatePassword}>
            update password
          </YellowGreenButton>

          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default UpdatePasswordButton;
