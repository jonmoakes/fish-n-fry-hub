import { useDispatch } from "react-redux";

import useGetShouldShowElementSelectors from "../../hooks/selectors/use-get-should-show-element-selectors";
import {
  hideElement,
  toggleShowElement,
} from "../../store/should-show-element/should-show-element.slice";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const OtpAccordion = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();

  const dispatch = useDispatch();

  return (
    <Accordion className="otp" {...{ shouldShowElement }}>
      <>
        <AccordionTitle
          className="otp"
          {...{ shouldShowElement }}
          onClick={() => dispatch(toggleShowElement())}
        >
          <div>{shouldShowElement ? "ok, close" : "what is an OTP?"}</div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement && (
          <AccordionContent>
            <Text>
              A One-Time Passcode (OTP) is a temporary code sent to your email
              address for secure login.
            </Text>
            <Text>
              it is classed as secure, as only you should have access to your
              emails.
            </Text>
            <Text>it has the added benefit of not having to remember a password for your account!</Text>
            <Text>Here's how it works:</Text>
            <Text>
              a request is sent to our servers for a one-time passcode.
            </Text>
            <Text>The server will then send a code to your email address.</Text>
            <Text>
              Check your email inbox for the code ( it may take a moment to a
              few mins to arrive ).
            </Text>
            <Text>
              back in the fish 'n' fry hub app, enter the code into box and then
              tap the 'confirm code' button to complete your login.
            </Text>
            <Text>
              Tips: Make sure to check your spam or junk folder if you don’t see
              the email. The code is valid for 15mins, after which, you will need to request another code.
            </Text>
            <Text>
              If you have trouble, you can always request a new code.{" "}
            </Text>

            <YellowGreenButton onClick={() => dispatch(hideElement())}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        )}
      </>
    </Accordion>
  );
};

export default OtpAccordion;
