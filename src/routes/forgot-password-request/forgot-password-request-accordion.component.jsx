import { useDispatch } from "react-redux";

import useShouldShowElementSelectors from "../../hooks/selectors/use-get-should-show-element-selectors";
import {
  hideElement,
  toggleShowElement,
} from "../../store/should-show-element/should-show-element.slice";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const ForgotPasswordRequestAccordion = () => {
  const { shouldShowElement } = useShouldShowElementSelectors();
  const dispatch = useDispatch();

  return (
    <Accordion {...{ shouldShowElement }}>
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={() => dispatch(toggleShowElement())}
        >
          <div>{shouldShowElement ? "ok, close" : "forgot password help"}</div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement ? (
          <AccordionContent>
            <Text>forgot your password?</Text>
            <Text>
              enter your email address below and tap the "reset password" button
              and we will send you a link to reset it!
            </Text>
            <YellowGreenButton onClick={() => dispatch(hideElement())}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        ) : null}
      </>
    </Accordion>
  );
};

export default ForgotPasswordRequestAccordion;
