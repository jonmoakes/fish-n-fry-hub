import styled, { keyframes } from "styled-components";
import { zoomInLeft } from "react-animations";

import {
  customBlack,
  customTomato,
  customBlue,
  customLightGreen,
  customYellow,
  customWhite,
  customLightYellow,
  customSalmon,
  customOrange,
} from "../colors";

import eyeIcon from "../../assets/eye.png";
import eyeIconHide from "../../assets/hide-eye.png";

const zoomInLeftAnimation = keyframes`${zoomInLeft}`;

export const HamburgerSpan = styled.span`
  height: 6px;
  width: 35px;
  background-color: ${customWhite};
  margin-bottom: 4px;
  border-radius: 5px;
`;

export const HamburgerSpanCloseMenu = styled(HamburgerSpan)`
  background-color: ${customTomato};
`;

export const BorderLink = styled.span`
  color: ${customWhite};
  border: 2px solid ${customWhite};
  padding: 5px;
  border-radius: 5px;

  &:hover {
    color: ${customLightGreen};
    border: 2px solid ${customLightGreen};

    @media screen and (max-width: 1366px) {
      color: ${customWhite};
      border: 2px solid ${customWhite};
    }
  }
`;

export const CheckoutLink = styled(BorderLink)`
  color: ${customYellow};
  border: 2px solid ${customYellow};

  &:hover {
    color: ${customYellow};
    border: 2px solid ${customYellow};

    @media screen and (max-width: 1366px) {
      color: ${customYellow};
      border: 2px solid ${customYellow};
    }
  }
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

export const OrangeSpan = styled.span`
  color: ${customOrange};
`;

export const WhiteSpan = styled.span`
  color: ${customWhite};
  text-shadow: 1px 1px 1px ${customBlack};

  &.checkout {
    font-size: calc(1rem);
    text-shadow: 0.5px 0.5px 0.5px ${customBlack};

    @media screen and (max-width: 450px) {
      font-size: calc(0.9rem);
    }
  }

  &.multiple-choice {
    white-space: pre-line;
  }
`;

export const YellowShadowSpan = styled.span`
  color: ${customYellow};
  text-shadow: 1px 1px 1px ${customBlack};

  &.small {
    font-size: 16px;
  }

  &.email {
    text-transform: lowercase;
  }
`;

export const BlackSpanHover = styled(BlackSpan)`
  &:hover {
    cursor: pointer;
  }
`;

export const BlueSpan = styled.span`
  color: ${customBlue};

  &.margin {
    margin: 10px auto;
  }

  &.clickable {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const YellowSpan = styled.span`
  color: ${customYellow};
`;

export const SalmonSpan = styled.span`
  color: ${customSalmon};
  text-shadow: 1px 1px 1px ${customBlack};
  font-size: calc(1rem);

  @media screen and (max-width: 450px) {
    font-size: calc(0.9rem);
  }
`;

export const SmallSpan = styled.span`
  font-size: 16px;
  color: ${customBlack};
`;

export const SignInPasswordEye = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "signInPasswordIsVisible",
})`
  position: absolute;
  top: 69%;
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

export const SignUpPasswordEye = styled(SignInPasswordEye).withConfig({
  shouldForwardProp: (prop) => prop !== "signUpPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.signUpPasswordIsVisible ? eyeIconHide : eyeIcon})`};
`;

export const SignUpConfirmPasswordEye = styled(SignInPasswordEye).withConfig({
  shouldForwardProp: (prop) => prop !== "signUpConfirmPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.signUpConfirmPasswordIsVisible ? eyeIconHide : eyeIcon})`};
  width: ${(props) =>
    `url(${props.signUpConfirmPasswordIsVisible ? "25px" : "30px"})`};
`;

export const ToggleResetPassword = styled(SignInPasswordEye).withConfig({
  shouldForwardProp: (prop) => prop !== "resetPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.resetPasswordIsVisible ? eyeIconHide : eyeIcon})`};
`;

export const ToggleResetPasswordConfirmPassword = styled(
  SignInPasswordEye
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

export const ToggleUpdateEmailPassword = styled(SignInPasswordEye).withConfig({
  shouldForwardProp: (prop) => prop !== "updateEmailPasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.updateEmailPasswordIsVisible ? eyeIconHide : eyeIcon})`};
`;

export const ToggleUpdatePassword = styled(SignInPasswordEye).withConfig({
  shouldForwardProp: (prop) => prop !== "updatePasswordIsVisible",
})`
  background-image: ${(props) =>
    `url(${props.updatePasswordIsVisible ? eyeIconHide : eyeIcon})`};
`;

export const ToggleConfirmUpdatePassword = styled(SignInPasswordEye).withConfig(
  {
    shouldForwardProp: (prop) =>
      prop !== "updatePasswordConfirmPasswordIsVisible",
  }
)`
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

export const EmergencyDetailsSpan = styled.span`
  margin-left: 10px;
`;

export const Name = styled.span`
  color: ${customWhite};
  font-weight: bold;
  font-size: 25px;
  text-shadow: 1px 1px 1px ${customBlack};
  margin-bottom: 10px;

  &.yellow {
    color: ${customYellow};
  }

  @media screen and (max-width: 450px) {
    margin-top: -10px;
    font-size: 20px;
  }
`;

export const Description = styled.span`
  margin: 15px auto 10px auto;
  color: ${customLightYellow};
  font-weight: bold;
  text-shadow: 1px 1px 1px ${customBlack};
  font-size: 18px;

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const Price = styled.span`
  color: ${customLightGreen};
  font-weight: bold;
  font-size: 25px;
  text-shadow: 1px 1px 1px ${customBlack};

  @media screen and (max-width: 450px) {
    width: unset;
  }
`;

export const RequiredSpan = styled.span`
  color: ${customTomato};
  background-color: ${customBlack};
  padding: 5px;
  border-radius: 5px;
  text-transform: capitalize;
`;

export const CheckoutHeadingSpan = styled.span`
  font-size: calc(1rem);
  color: ${customWhite};
`;

export const CheckoutItemText = styled.span`
  width: 30%;
  color: ${customYellow};
  text-shadow: 0.5px 0.5px 0.5px ${customBlack};
  font-size: calc(1rem);

  &.width {
    width: 23.3%;
  }

  &.large {
    font-size: calc(1.5rem);
    @media screen and (max-width: 450px) {
      font-size: calc(1.3rem);
    }
  }
`;

export const Value = styled(CheckoutItemText)`
  width: 23.3%;
  margin: 0px 5px;
  font-size: calc(1.5rem);

  @media screen and (max-width: 450px) {
    font-size: calc(1.3rem);
  }
`;

export const RemoveItemSpan = styled.span`
  width: 23.3%;
  cursor: pointer;
  color: ${customTomato};
  text-shadow: 1px 1px 1px ${customBlack};
  font-size: calc(1.7rem);

  @media screen and (max-width: 450px) {
    font-size: calc(1.3rem);
  }
`;

export const ClearButtonExampleSpan = styled.span`
  background-color: ${customTomato};
  color: ${customBlack};
  padding: 5px 10px;
  border: 1px solid ${customBlack};
  border-radius: 5px;
  text-transform: lowercase;
`;

export const SpanWithBackground = styled.span`
  color: ${customTomato};
  background-color: ${customBlack};
  padding: 5px;
  border-radius: 5px;
  text-transform: capitalize;

  &.completed {
    color: ${customYellow};
  }
`;
