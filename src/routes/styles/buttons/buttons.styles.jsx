import styled, { keyframes } from "styled-components";
import { pulse, zoomInLeft, zoomInRight, bounceInDown } from "react-animations";

import {
  customBlack,
  customBlue,
  customGrey,
  customIosBlue,
  customLightGreen,
  customTomato,
  customWhite,
  customYellow,
} from "../colors";
import eyeIcon from "../../assets/eye.png";
import eyeIconHide from "../../assets/hide-eye.png";

const PulseAnimation = keyframes`${pulse}`;
const zoomInLeftAnimation = keyframes`${zoomInLeft}`;
const zoomInRightAnimation = keyframes`${zoomInRight}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;

export const Button = styled.button`
  width: 250px;
  height: 50px;
  font-size: 18px;
  font-family: inherit;
  font-weight: bold;
  text-transform: capitalize;
  color: ${customBlack};
  background-color: ${customYellow};
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid ${customBlack};
  transition: all 0.2s ease-in-out;
  outline: none;
  margin: 20px auto;

  &:hover {
    transform: scale(1.05);
    color: ${customWhite};
    background-color: ${customBlue};

    @media screen and (max-width: 1366px) {
      transition: none;

      &:hover {
        color: ${customBlack};
        background-color: ${customYellow};
      }
    }
  }

  :active {
    transform: translate(0, 0.5rem);
    box-shadow: 0 0.1rem ${customBlack};
  }

  @media screen and (max-width: 320px) {
    width: 200px;
  }
`;

export const DisabledButton = styled(Button)`
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
`;

export const YellowGreenButton = styled(Button)`
  &.add-funds {
    animation: 1s ${bounceInDownAnimation};
    margin: 0px auto 40px auto;
    width: 180px;
  }

  &.disabled {
    margin: 0px auto 40px auto;
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }

  &.green {
    background-color: ${customLightGreen};
  }

  &:hover {
    background-color: ${customLightGreen};
    color: ${customBlack};
    text-shadow: none;

    @media screen and (max-width: 1366px) {
      background-color: unset;
      color: unset;
    }
  }
`;

export const IconButton = styled.button`
  width: 70px;
  height: 70px;
  position: fixed;
  right: 30px;
  top: 110px;
  background-color: transparent;
  border: none;
  z-index: 10;
  outline: none;
  cursor: pointer;
  animation: infinite 1s ${PulseAnimation};

  &.top-floating-button {
    right: 10px;
    animation: 1s ${bounceInDownAnimation};

    @media screen and (max-width: 1366px) {
      right: 0px;
    }

    @media screen and (max-width: 600px) {
      right: -10px;
    }

    @media screen and (max-width: 450px) {
      top: 100px;
    }
  }

  &.bottom-floating-button {
    right: 10px;
    animation: 1s ${bounceInDownAnimation};
    top: 190px;

    @media screen and (max-width: 1366px) {
      right: 0px;
    }

    @media screen and (max-width: 600px) {
      top: 170px;
      right: -10px;
    }
  }

  @media screen and (max-width: 850px) {
    right: 20px;
  }

  @media screen and (max-width: 450px) {
    top: 100px;
  }
`;

export const EditEntryButton = styled(Button)`
  background-color: ${customYellow};
  animation: 1s ${zoomInLeftAnimation};
  width: 200px;
  height: 50px;
  font-size: 18px;
  line-height: 10px;
  margin: 10px;
  color: ${customBlack};
  text-shadow: none;

  &:hover {
    background-color: ${customYellow};
    color: ${customBlack};
  }

  @media screen and (max-width: 850px) {
    font-size: 16px;
  }

  @media screen and (max-width: 320px) {
    width: 90%;
  }
`;

export const RemoveEntryButton = styled(EditEntryButton)`
  background-color: ${customTomato};
  animation: 1s ${zoomInLeftAnimation};

  &:hover {
    background-color: ${customTomato};
  }
`;

export const DownloadPdfButton = styled(EditEntryButton)`
  background-color: ${customLightGreen};
  animation: 1s ${zoomInRightAnimation};

  &:hover {
    background-color: ${customLightGreen};
  }
`;

export const BackButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  position: fixed;
  left: 10px;
  bottom: 22px;
  background-color: ${customGrey};
  color: ${customBlack};
  border: 2px solid ${customBlack};
  z-index: 10;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 850px) {
    height: 60px;
    width: 60px;
  }

  @media screen and (max-width: 450px) {
    height: 55px;
    width: 55px;
    bottom: 25px;
  }
`;

export const GreyButton = styled(Button)`
  background-color: ${customGrey};
  animation: 0.5s ${bounceInDownAnimation};

  &.small-text {
    font-size: 16px;

    @media screen and (max-width: 320px) {
      font-size: 14px;
    }
  }

  &:hover {
    color: ${customBlack};
    background-color: ${customGrey};

    @media screen and (max-width: 1366px) {
      &:hover {
        color: ${customBlack};
        background-color: ${customGrey};
      }
    }
  }

  @media screen and (max-width: 320px) {
    width: 90%;
    font-size: 16px;
  }
`;

export const ClearSearchButton = styled.button`
  position: absolute;
  top: 0;
  border-radius: 5px;
  right: 0px;
  z-index: 2;
  border: none;
  height: 50px;
  width: 5%;
  cursor: pointer;
  color: ${customWhite};
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 1px solid ${customBlack};
  background-color: ${customTomato};
  transform: translateX(2px);
  text-transform: capitalize;
  font-family: inherit;
  color: ${customBlack};
  font-weight: 700;
  animation: 1s ${bounceInDownAnimation};

  @media screen and (max-width: 1366px) {
    width: 10%;
  }

  @media screen and (max-width: 450px) {
    height: 40px;
  }
`;

export const ErrorFallbackButton = styled(Button)`
  background-color: ${customLightGreen};
  color: ${customBlack};
  text-shadow: none;

  &:hover {
    transform: scale(1.05);
    background-color: ${customLightGreen};
    color: ${customBlack};
    text-shadow: none;

    @media screen and (max-width: 1366px) {
      background-color: ${customLightGreen};
      color: ${customBlack};
    }
  }
`;
export const DateSearchHelpButton = styled.button`
  font-family: inherit;
  color: ${customWhite};
  cursor: pointer;
  text-transform: capitalize;
  margin: 20px auto 50px auto;
  background-color: ${customBlack};
  padding: 7px;
  border: none;
  border-radius: 5px;

  @media screen and (max-width: 850px) {
    margin: 20px auto 20px auto;
  }

  @media screen and (max-width: 1366px) {
    margin: 20px auto 0px auto;
  }
`;

export const PaginationPageButton = styled(Button)`
  min-width: unset;
  width: 50px;
  height: 10px;
  margin: 0px 10px 20px 0px;
  line-height: 0px;
  font-size: 16px;
  text-shadow: none;
  padding: 10px 5px;
  background-color: ${customLightGreen};
  color: ${customBlack};

  @media screen and (max-width: 1024px) {
    margin: 0px 5px 20px 5px;
  }

  @media screen and (max-width: 1024px) {
    width: 40px;
  }
`;

export const MinimalButton = styled.button`
  margin: -5px auto 5px auto;
  text-transform: capitalize;
  height: 30px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${customIosBlue};
  font-family: inherit;
  outline: none;
  border: 1px solid ${customBlack};
  border-radius: 2px;
  color: ${customBlack};

  &.margin {
    margin: 10px auto 5px auto;
  }

  &.clear-week {
    margin: 0px auto 10px auto;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const RegistrationXButton = styled.button`
  width: 50px;
  height: auto;
  border-radius: 2px;
  outline: none;
  color: ${customBlack};
  background-color: ${customTomato};
  border: 1px solid ${customBlack};

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 350px) {
    width: 35px;
  }
`;

export const RegistrationTickButton = styled(RegistrationXButton)`
  background-color: ${customLightGreen};
`;

export const ReloadInTableCellButton = styled.button`
  font-family: inherit;
  text-transform: capitalize;
  border: 1px solid ${customBlack};
  border-radius: 2px;
  outline: none;
  color: ${customBlack};
  margin-top: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const ToggleShowEmailButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "showEmail",
})`
  cursor: pointer;
  width: 40px;
  height: 24px;
  background-image: ${(props) =>
    `url(${props.showEmail ? eyeIconHide : eyeIcon})`};
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 10px;
  animation: infinite 2s ${PulseAnimation};
`;

export const ToggleShowPhoneNumberButton = styled(
  ToggleShowEmailButton
).withConfig({
  shouldForwardProp: (prop) => prop !== "showPhone",
})`
  background-image: ${(props) =>
    `url(${props.showPhone ? eyeIconHide : eyeIcon})`};
`;
