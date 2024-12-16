import { useDispatch } from "react-redux";

import useGetUpdateEmailSelectors from "../../hooks/selectors/use-get-update-email-selectors";
import { toggleUpdateEmailPasswordIsVisible } from "../../store/password-is-visible/password-is-visible.slice";

import useHideUpdateEmailPasswordOnEmpty from "./update-email-hooks/use-hide-update-email-password-on-empty";
import useConfirmUpdateEmail from "./update-email-hooks/use-confirm-update-email";
import useIsOnline from "../../hooks/use-is-online";
import useGetPasswordIsVisibleSelectors from "../../hooks/selectors/use-get-password-is-visible-selectors";

import NetworkError from "../../components/errors/network-error.component";

import {
  Form,
  Label,
  LowercasedInput,
  PasswordInput,
} from "../../styles/form/form.styles";
import { RelativePositionDiv } from "../../styles/div/div.styles";
import { ToggleUpdateEmailPassword } from "../../styles/span/span.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import {
  enterEmailAddress,
  enterYourPasswordPlaceholder,
} from "../../strings/placeholders/placeholders-strings";

const NewEmail = ({ dispatchHandleUpdateEmailDetailsChange }) => {
  useHideUpdateEmailPasswordOnEmpty();
  const { newEmail, confirmNewEmail, password } = useGetUpdateEmailSelectors();
  const { updateEmailPasswordIsVisible } = useGetPasswordIsVisibleSelectors();

  const { confirmUpdateEmail } = useConfirmUpdateEmail();

  const { isOnline } = useIsOnline();
  const dispatch = useDispatch();

  return (
    <>
      <Form className="no-margin-top">
        <Label>new email address:</Label>
        <LowercasedInput
          name="newEmail"
          type="email"
          value={newEmail || ""}
          placeholder={enterEmailAddress}
          required
          onChange={dispatchHandleUpdateEmailDetailsChange}
        />

        <LowercasedInput
          name="confirmNewEmail"
          type="email"
          value={confirmNewEmail || ""}
          placeholder="confirm new email address"
          required
          onChange={dispatchHandleUpdateEmailDetailsChange}
        />

        <Label>your password:</Label>
        <RelativePositionDiv>
          <PasswordInput
            name="password"
            type={updateEmailPasswordIsVisible ? "text" : "password"}
            value={password || ""}
            placeholder={enterYourPasswordPlaceholder}
            required
            onChange={dispatchHandleUpdateEmailDetailsChange}
          />

          {password.length ? (
            <ToggleUpdateEmailPassword
              {...{ updateEmailPasswordIsVisible }}
              onClick={() => dispatch(toggleUpdateEmailPasswordIsVisible())}
            />
          ) : null}
        </RelativePositionDiv>

        {!isOnline ? (
          <NetworkError />
        ) : newEmail && confirmNewEmail && password ? (
          <YellowGreenButton type="button" onClick={confirmUpdateEmail}>
            update email
          </YellowGreenButton>
        ) : null}
      </Form>
    </>
  );
};

export default NewEmail;
