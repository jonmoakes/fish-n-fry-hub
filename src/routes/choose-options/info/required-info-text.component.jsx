import Balancer from "react-wrap-balancer";
import useShouldShowElement from "../../../hooks/use-should-show-element";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../../styles/div/div.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

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
            <Text>
              <Balancer>
                please note that items marked <RedSpan>*</RedSpan> must be
                selected in order to access the next step.
              </Balancer>
            </Text>
            <BlackHr />
            <Text>
              <Balancer>
                for multiple choice options ( for example when choosing sauces )
                tick whichever boxes that you require.
              </Balancer>
            </Text>
            <Text>
              <Balancer>
                when choosing a single option ( when choosing a size for example
                ), tap the appropriate box to choose it.
              </Balancer>
            </Text>
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
