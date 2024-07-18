import { useLocation } from "react-router-dom";
import useHandleShowError from "./errors-hooks/use-handle-show-error";

import { BlackText, Text } from "../../styles/p/p.styles";
import { BlackSpan } from "../../styles/span/span.styles";
import { ErrorDiv, ParentDiv } from "../../styles/div/div.styles";
import { Button } from "../../styles/buttons/buttons.styles";
import { StyledLink } from "../../styles/link/link.styles";

import {
  contactRoute,
  databaseManagementRoute,
} from "../../strings/routes/routes-strings";

const ShowFetchErrors = () => {
  const { showErrorHeading, errorToDisplay, showTailInfoToUser } =
    useHandleShowError();

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {errorToDisplay() ? (
        <ParentDiv>
          <Text>
            sorry, there was an error fetching data on our end. please see the
            details below:
          </Text>
          <ErrorDiv className="fetch-error">
            <BlackText>{showErrorHeading()}</BlackText>
            <BlackText>
              error received:
              <br />'<BlackSpan>{errorToDisplay()}</BlackSpan>'
            </BlackText>
          </ErrorDiv>

          <Text>press the 'reload page' button and then try again.</Text>
          <Text>please don't use the browsers back button.</Text>
          <Text>
            if you continue to see this error, please{" "}
            {path === databaseManagementRoute ? (
              <BlackSpan>contact jonathan</BlackSpan>
            ) : (
              <StyledLink className="yellow" to={contactRoute}>
                contact us
              </StyledLink>
            )}{" "}
            and quote the error in the grey box above.
          </Text>
          <Text>we apologise for the inconvenience!</Text>

          <Button onClick={() => window.location.reload()}>reload</Button>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ShowFetchErrors;
