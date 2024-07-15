import useShouldShowElement from "../../hooks/use-should-show-element";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";
import { LowercasedSpan } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const AppDetails = () => {
  const { shouldShowElement, toggleShouldShowElement, hideShownElement } =
    useShouldShowElement();

  return (
    <>
      <Accordion {...{ shouldShowElement }}>
        <>
          <AccordionTitle
            {...{ shouldShowElement }}
            onClick={toggleShouldShowElement}
          >
            <div>{shouldShowElement ? "ok, close" : "find out more"}</div>
            <>{shouldShowElement ? "-" : "+"}</>
          </AccordionTitle>

          {shouldShowElement ? (
            <AccordionContent>
              <Text>
                the fish '<LowercasedSpan>n</LowercasedSpan>' fry hub is a fully
                functioning{" "}
                <a href="https://web.dev/what-are-pwas/">progressive web app</a>{" "}
                featuring a secure login system and full payment flow ( using a
                test credit card only of course )!
              </Text>

              <Text>
                it has been designed so that you can see exactly how an app like
                this would work for your business.
              </Text>

              <BlackHr />

              <Text>
                as a user that is not signed in, you can view the menu and add
                items to your cart ready for 'purchasing'.
              </Text>

              <Text>
                by creating an account, you can make 'orders' using our test
                debit card.
              </Text>
              <Text>
                you can also view / search all of your past orders in a table
                view and create PDF documents as required.
              </Text>

              <Text>
                for more information and a full demo of how the app owner
                dashboard would work, please{" "}
                <StyledLink to="/contact">Contact me</StyledLink>
              </Text>

              <Text>I hope to hear from you soon!</Text>
              <BlackHr />

              <YellowGreenButton onClick={hideShownElement}>
                Ok, Close
              </YellowGreenButton>
            </AccordionContent>
          ) : null}
        </>
      </Accordion>
    </>
  );
};

export default AppDetails;
