import styled, { keyframes } from "styled-components";
import { zoomInLeft } from "react-animations";

import {
  customBlack,
  customTomato,
  customBlue,
  customLightGreen,
  customYellow,
} from "../colors";

import eyeIcon from "../../assets/eye.png";
import eyeIconHide from "../../assets/hide-eye.png";

const zoomInLeftAnimation = keyframes`${zoomInLeft}`;

export const HamburgerSpan = styled.span`
  height: 6px;
  width: 35px;
  background-color: ${customBlack};
  margin-bottom: 4px;
  border-radius: 5px;
`;

export const HamburgerSpanCloseMenu = styled(HamburgerSpan)`
  background-color: ${customBlue};
`;

export const BorderLink = styled.span`
  color: ${customBlack};
  border: 2px solid ${customBlack};
  padding: 5px;
  border-radius: 5px;
`;

export const RedSpan = styled.span`
  color: ${customTomato};

  &.no-format {
    text-transform: none;
  }

  &.capitalised {
    text-transform: capitalize;
  }

  &.lowercased {
    text-transform: lowercase;
  }

  &.shadow {
    text-shadow: 0.5px 0.5px 0.5px ${customBlack};
  }
`;

export const LightGreenSpan = styled.span`
  color: ${customLightGreen};
  text-transform: capitalize;
`;

export const BlackSpan = styled.span`
  color: ${customBlack};
`;

export const YellowShadowSpan = styled.span`
  color: ${customYellow};
  text-shadow: 1px 1px 1px ${customBlack};
`;

export const BlackSpanHover = styled(BlackSpan)`
  &:hover {
    cursor: pointer;
  }
`;

export const BlueSpan = styled.span`
  color: ${customBlue};

  &.clickable {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const SmallSpan = styled.span`
  font-size: 16px;
  color: ${customBlack};
`;

export const ToggleSignInPassword = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "signInPasswordIsVisible",
})`
  position: absolute;
  top: 62%;
  right: 50px;
  transform: translateY(-50%);
  cursor: pointer;
  width: 40px;
  height: 24px;
  background-image: ${(props) =>
    `url(${props.signInPasswordIsVisible ? eyeIconHide : eyeIcon})`};
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 1366px) {
    right: 30px;
  }

  @media screen and (max-width: 450px) {
    right: 20px;
  }
`;

export const ToggleSignUpPassword = styled(ToggleSignInPassword).withConfig({
  shouldForwardProp: (prop) => prop !== "signUpPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.signUpPasswordIsVisible ? eyeIconHide : eyeIcon})`};
`;

export const ToggleSignUpConfirmPassword = styled(
  ToggleSignInPassword
).withConfig({
  shouldForwardProp: (prop) => prop !== "signUpConfirmPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.signUpConfirmPasswordIsVisible ? eyeIconHide : eyeIcon})`};
  width: ${(props) =>
    `url(${props.signUpConfirmPasswordIsVisible ? "25px" : "30px"})`};
`;

export const ToggleResetPassword = styled(ToggleSignInPassword).withConfig({
  shouldForwardProp: (prop) => prop !== "resetPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.resetPasswordIsVisible ? eyeIconHide : eyeIcon})`};
`;

export const ToggleResetPasswordConfirmPassword = styled(
  ToggleSignInPassword
).withConfig({
  shouldForwardProp: (prop) => prop !== "resetPasswordConfirmPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${
      props.resetPasswordConfirmPasswordIsVisible ? eyeIconHide : eyeIcon
    })`};
  width: ${(props) =>
    `url(${props.resetPasswordConfirmPasswordIsVisible ? "25px" : "30px"})`};
`;

export const ToggleUpdateEmailPassword = styled(
  ToggleSignInPassword
).withConfig({
  shouldForwardProp: (prop) => prop !== "updateEmailPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.updateEmailPasswordIsVisible ? eyeIconHide : eyeIcon})`};
`;

export const ToggleUpdatePassword = styled(ToggleSignInPassword).withConfig({
  shouldForwardProp: (prop) => prop !== "updatePasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.updatePasswordIsVisible ? eyeIconHide : eyeIcon})`};
`;

export const ToggleConfirmUpdatePassword = styled(
  ToggleSignInPassword
).withConfig({
  shouldForwardProp: (prop) =>
    prop !== "updatePasswordConfirmPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${
      props.updatePasswordConfirmPasswordIsVisible ? eyeIconHide : eyeIcon
    })`};
`;

export const HorizLine = styled.span`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:before,
  &:after {
    content: "";
    border-top: 2px solid;
    margin: 0 20px 0 0;
    flex: 1 0 20px;
  }

  &:after {
    margin: 0 0 0 20px;
  }

  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`;

export const LowercasedSpan = styled.span`
  text-transform: lowercase;

  &.right-margin {
    margin-right: 10px;
  }

  &.animate {
    animation: 0.5s ${zoomInLeftAnimation};
  }

  &.red {
    color: ${customTomato};
  }
`;

export const BlueLowercasedSpan = styled(LowercasedSpan)`
  color: ${customBlue};
`;

export const RightMarginSpan = styled.span`
  margin-right: 10px;

  &.animate {
    animation: 0.5s ${zoomInLeftAnimation};
  }
`;

export const UntransformedSpan = styled.span`
  text-transform: none;
  color: ${customTomato};
`;

export const YellowSpan = styled.span`
  color: ${customYellow};
`;

export const EmergencyDetailsSpan = styled.span`
  margin-left: 10px;
`;
