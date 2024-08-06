import Balancer from "react-wrap-balancer";
import useShouldShowElement from "../../../hooks/use-should-show-element";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  RequiredDiv,
} from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";
import { RequiredSpan } from "../../../styles/span/span.styles";

const RequiredInfoText = () => {
  const { shouldShowElement, toggleShouldShowElement, hideShownElement } =
    useShouldShowElement();
  return (
    <Accordion {...{ shouldShowElement }}>
      <>
        <AccordionTitle
          {...{ shouldShowElement }}
          onClick={toggleShouldShowElement}
        >
          <div>{shouldShowElement ? "ok, close" : "choosing options info"}</div>
          <>{shouldShowElement ? "-" : "+"}</>
        </AccordionTitle>

        {shouldShowElement ? (
          <AccordionContent>
            <BlackHr />
            <Text>please note that items marked</Text>
            <Text>
              <RequiredDiv>
                <RequiredSpan>required</RequiredSpan>
              </RequiredDiv>{" "}
              <Balancer>
                must be selected in order to show the add to cart button.
              </Balancer>
            </Text>
            <BlackHr />
            <Text>
              <Balancer>
                the final price of the item
                <br />( including any options if applicable and quantity chosen
                )<br />
                will be shown just above the add to cart button at the bottom of
                the page.
              </Balancer>
            </Text>
            <BlackHr />

            <YellowGreenButton onClick={hideShownElement}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        ) : null}
      </>
    </Accordion>
  );
};
export default RequiredInfoText;
