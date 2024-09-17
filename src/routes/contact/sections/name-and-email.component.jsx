import useGetContactFormSelectors from "../../../hooks/selectors/use-get-contact-form-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import {
  CapitalizedInput,
  Label,
  LowercasedInput,
} from "../../../styles/form/form.styles";
import { BlackText } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import Balancer from "react-wrap-balancer";

const NameAndEmail = ({ handleContactFormDetailsChange }) => {
  const { name, email } = useGetContactFormSelectors();
  const { currentUser } = useGetCurrentUserSelectors();

  return (
    <>
      {!currentUser ? (
        <>
          <Label>
            <RedSpan>* </RedSpan>Your Name:
          </Label>
          <CapitalizedInput
            type="text"
            name="name"
            onChange={handleContactFormDetailsChange}
            value={name || ""}
          />

          <Label>
            <RedSpan>* </RedSpan>Your Email:
          </Label>
          <LowercasedInput
            type="email"
            name="email"
            onChange={handleContactFormDetailsChange}
            value={email || ""}
          />
        </>
      ) : (
        <>
          <BlackText>
            <Balancer>
              as you are signed in, we will use your name and email address that
              you signed up with.
            </Balancer>
          </BlackText>
          <BlackText>
            <Balancer>
              if you want the response to be sent to a different email address,
              please specify it in the message. :)
            </Balancer>
          </BlackText>
          <BlackHr className="margin" />
        </>
      )}
    </>
  );
};

export default NameAndEmail;
