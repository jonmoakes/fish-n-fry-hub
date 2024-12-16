import { useDispatch } from "react-redux";
import Balancer from "react-wrap-balancer";

import useGetShouldShowElementSelectors from "../../hooks/selectors/use-get-should-show-element-selectors";
import {
  hideSecondElement,
  toggleShowSecondElement,
} from "../../store/should-show-element/should-show-element.slice";

import {
  SecondAccordion,
  AccordionContent,
  SecondAccordionTitle,
} from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import { ListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { RedSpan } from "../../styles/span/span.styles";

const TroubleWithAuthMethodsAccordion = () => {
  const { shouldShowSecondElement } = useGetShouldShowElementSelectors();

  const dispatch = useDispatch();

  return (
    <SecondAccordion {...{ shouldShowSecondElement }}>
      <>
        <SecondAccordionTitle
          {...{ shouldShowSecondElement }}
          onClick={() => dispatch(toggleShowSecondElement())}
        >
          <div>
            {shouldShowSecondElement ? "ok, close" : "trouble signing in?"}
          </div>
          <>{shouldShowSecondElement ? "-" : "+"}</>
        </SecondAccordionTitle>

        {shouldShowSecondElement && (
          <AccordionContent>
            <BlueH2>
              <Balancer>having trouble?</Balancer>
            </BlueH2>

            <Text>
              on mobiles ( iPhones in particular ), due to strong privacy
              controls, sign in with google or Facebook may not work with the
              default settings.
            </Text>
            <Text>here is how to fix it!</Text>

            <BlackHr />
            <BlueH2>Safari</BlueH2>

            <StyledUnorderedList>
              <ListItem className="black">open 'settings'</ListItem>
              <ListItem className="black">
                scroll down until you find 'apps'
              </ListItem>
              <ListItem className="black">
                <Balancer>find and tap on 'safari'</Balancer>
              </ListItem>
              <ListItem className="black">
                <Balancer>
                  scroll down and <RedSpan>DISABLE</RedSpan> 'prevent
                  cross-site-tracking'
                </Balancer>
              </ListItem>
            </StyledUnorderedList>

            <BlackHr />

            <BlueH2>chrome / firefox / edge</BlueH2>
            <StyledUnorderedList>
              <ListItem className="black">open 'settings'</ListItem>
              <ListItem className="black">
                scroll down until you find 'apps'
              </ListItem>
              <ListItem className="black">
                <Balancer>
                  find and tap on 'chrome', 'firefox' or 'edge' ( depending on
                  which browser you're using )
                </Balancer>
              </ListItem>
              <ListItem className="black">
                <Balancer>
                  scroll down and <RedSpan>ENABLE</RedSpan> 'allow cross-website
                  tracking'
                </Balancer>
              </ListItem>
            </StyledUnorderedList>

            <Text>
              you can always revert these settings once you have signed in.
            </Text>
            <YellowGreenButton onClick={() => dispatch(hideSecondElement())}>
              Ok, Close
            </YellowGreenButton>
          </AccordionContent>
        )}
      </>
    </SecondAccordion>
  );
};

export default TroubleWithAuthMethodsAccordion;
