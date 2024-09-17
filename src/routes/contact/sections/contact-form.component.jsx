import useGetContactFormSelectors from "../../../hooks/selectors/use-get-contact-form-selectors";
import useSetContactFormNameAndEmailIfSignedIn from "../contact-form-hooks/use-set-contact-form-name-and-email-if-signed-in";
import useHandleContactFormDetailsChange from "../contact-form-hooks/use-handle-contact-form-details-change";

import NameAndEmail from "./name-and-email.component";
import SendMessageButton from "./send-message-button.component";

import { Form, StyledTextArea, Label } from "../../../styles/form/form.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";

const ContactForm = () => {
  const { message } = useGetContactFormSelectors();
  const { handleContactFormDetailsChange } =
    useHandleContactFormDetailsChange();

  useSetContactFormNameAndEmailIfSignedIn();

  return (
    <ParentDiv>
      <>
        <Text>
          <RedSpan>* </RedSpan> = required field:
        </Text>

        <Form className="no-margin-top">
          <NameAndEmail {...{ handleContactFormDetailsChange }} />
          <Label>
            <RedSpan>* </RedSpan>Your Message:
          </Label>
          <StyledTextArea
            type="text"
            name="message"
            onChange={handleContactFormDetailsChange}
            value={message || ""}
          />
          <SendMessageButton />
        </Form>
      </>
    </ParentDiv>
  );
};

export default ContactForm;
