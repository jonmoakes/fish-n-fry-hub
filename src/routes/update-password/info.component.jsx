import { useDispatch } from "react-redux";

import useGetShouldShowElementSelectors from "../../hooks/selectors/use-get-should-show-element-selectors";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";

import {
  hideElement,
  toggleShowElement,
} from "../../store/should-show-element/should-show-element.slice";

const Info = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();

  const dispatch = useDispatch();

  return (
    <Accordion {...{ shouldShowElement }}>
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={() => dispatch(toggleShowElement())}
        >
          <div>{shouldShowElement ? "ok, close" : "update password help"}</div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement && (
          <AccordionContent>
            <Text>
              here, you can update your password that you use to sign into your
              account.
            </Text>
            <Text>
              when you tap on the 'update password' button below, we will send a
              password reset link to your email address.
            </Text>
            <Text>
              when you tap on this link in your email, you will be sent to a
              secure page where you can change your password.
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

export default Info;
