import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import useHandleShowError from "./errors-hooks/use-handle-show-error";
import { resetMenuError } from "../../store/menu/menu.slice";
import { resetChooseOptionsFetchErrors } from "../../store/choose-options/choose-options.slice";
import { resetCartItemsError } from "../../store/cart/cart.slice";

import { BlackText, Text } from "../../styles/p/p.styles";
import { BlackSpan } from "../../styles/span/span.styles";
import { ErrorDiv, ParentDiv } from "../../styles/div/div.styles";
import { Button } from "../../styles/buttons/buttons.styles";
import { StyledLink } from "../../styles/link/link.styles";

import {
  chooseOptionsRoute,
  contactRoute,
  databaseManagementRoute,
  menuRoute,
} from "../../strings/routes/routes-strings";

const ShowFetchErrors = () => {
  const { showErrorHeading, errorToDisplay, menuError, cartItemsError } =
    useHandleShowError();

  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname;

  const reloadAfterTimeOut = () => {
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  const reload = () => {
    if (path === menuRoute) {
      if (menuError) {
        dispatch(resetMenuError());
        reloadAfterTimeOut();
      } else if (cartItemsError) {
        dispatch(resetCartItemsError);
        reloadAfterTimeOut();
      } else {
        reloadAfterTimeOut();
      }
    } else if (path === chooseOptionsRoute) {
      dispatch(resetChooseOptionsFetchErrors());
      reloadAfterTimeOut();
    } else {
      window.location.reload();
    }
  };

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

          <Button onClick={reload}>reload</Button>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ShowFetchErrors;
