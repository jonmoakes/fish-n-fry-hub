import { useDispatch } from "react-redux";
import Balancer from "react-wrap-balancer";

import useGetShouldShowElementSelectors from "../../hooks/selectors/use-get-should-show-element-selectors";
import {
  hideElement,
  toggleShowElement,
} from "../../store/should-show-element/should-show-element.slice";

import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  ParentDiv,
} from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import { StyledLink } from "../../styles/link/link.styles";
import { contactRoute } from "../../strings/routes/routes-strings";
import { BlueSpan } from "../../styles/span/span.styles";

const AddOrderAfterErrorInstructions = () => {
  const { shouldShowElement } = useGetShouldShowElementSelectors();

  const dispatch = useDispatch();

  return (
    <ParentDiv>
      <Accordion {...{ shouldShowElement }}>
        <>
          <AccordionTitle
            {...{ shouldShowElement }}
            onClick={() => dispatch(toggleShowElement())}
          >
            <div>
              {shouldShowElement ? "ok, close" : "add order instructions"}
            </div>
            <>{shouldShowElement ? "-" : "+"}</>
          </AccordionTitle>

          {shouldShowElement && (
            <AccordionContent>
              <Text>
                <Balancer>
                  in the form below, enter in the customer name, email, id and
                  order details from the email into its appropriate input.
                </Balancer>
              </Text>
              <Text>
                <Balancer>
                  then tap on the 'upload order' button and confirm.
                </Balancer>
              </Text>
              <Text>
                <Balancer>
                  this will manually add the order to the database, which will
                  then show up in your orders table.
                </Balancer>
              </Text>
              <BlackHr />
              <Text>
                <Balancer>
                  <BlueSpan>
                    we highly recommend copy and pasting the values from the
                    email so that there are no errors.
                  </BlueSpan>
                </Balancer>
              </Text>

              <BlackHr />

              <Text>
                the order details may look like a long complicated bit of text,
                but this is how the database needs to receive it in order to
                display it properly, so please copy and paste the whole value as
                it is.
              </Text>

              <Text>
                <Balancer>
                  if you receive an error when trying to add this order, or have
                  any questions at all, please{" "}
                  <StyledLink to={contactRoute}>contact jonathan</StyledLink>.
                </Balancer>
              </Text>

              <YellowGreenButton onClick={() => dispatch(hideElement())}>
                Ok, Close
              </YellowGreenButton>
            </AccordionContent>
          )}
        </>
      </Accordion>
    </ParentDiv>
  );
};

export default AddOrderAfterErrorInstructions;
