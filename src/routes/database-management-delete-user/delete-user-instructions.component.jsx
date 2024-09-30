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

const DeleteUserInstructions = () => {
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
              {shouldShowElement ? "ok, close" : "delete user instructions"}
            </div>
            <>{shouldShowElement ? "-" : "+"}</>
          </AccordionTitle>

          {shouldShowElement && (
            <AccordionContent>
              <Text>
                <Balancer>
                  in the form below, enter in the users unique document id that
                  is in the email.
                </Balancer>
              </Text>
              <Text>
                <Balancer>
                  then tap on the 'delete user' button and confirm.
                </Balancer>
              </Text>
              <Text>
                <Balancer>
                  this will delete the user from the database.
                </Balancer>
              </Text>
              <BlackHr />
              <Text>
                <Balancer>
                  we recommend copy and pasting the values from the email so
                  that there are no errors.
                </Balancer>
              </Text>

              <BlackHr />

              <Text>
                <Balancer>
                  once you have completed these actions, please refer to the
                  email for the final step which is contacting jonathan and
                  giving him the users unique document id, so that he can remove
                  the authentication user from the database.
                </Balancer>
              </Text>

              <BlackHr />
              <Text>
                <Balancer>
                  if you receive an error when trying to delete this user, or
                  have any questions at all, please{" "}
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

export default DeleteUserInstructions;
