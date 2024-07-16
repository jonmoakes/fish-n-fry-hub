import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

import { customBlack, customOrange, customTomato } from "../colors";

const PulseAnimation = keyframes`${pulse}`;

export const StyledImage = styled.img`
  width: 900px;
  height: 442px;
  border: 2px solid ${customBlack};
  border-radius: 15px;
  /* margin: 15px auto 50px auto; */

  &.loading {
    filter: blur(10px);
    clip-path: inset(0);
  }
  &.loaded {
    filter: blur(0px);
    transition: filter 0.5s linear;
  }

  @media screen and (max-width: 1366px) {
    width: 700px;
    height: 344px;
  }

  @media screen and (max-width: 820px) {
    width: 500px;
    height: 246px;
  }

  @media screen and (max-width: 650px) {
    width: 400px;
    height: 196px;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
    height: 147px;
  }

  @media screen and (max-width: 350px) {
    width: 270px;
    height: 133px;
  }

  @media screen and (max-width: 280px) {
    width: 230px;
    height: 113px;
  }
`;

export const LogoImage = styled.img`
  height: 80px;
  width: 80px;
  margin-left: 20px;
  border-radius: 5px;
  border: 2px solid ${customBlack};

  &.account {
    margin: 0px auto 10px auto;
  }
`;

export const Icon = styled.img`
  width: 70px;
  height: 70px;
  background-color: transparent;
  position: relative;
  right: 6px;
  top: -1px;

  &.top-floating-button {
    width: 50px;
    height: 50px;
    padding: 10px;
    background-color: ${customOrange};
    border: 1px solid ${customBlack};
    border-radius: 5px;
    animation: infinite 1s ${PulseAnimation};

    @media screen and (max-width: 600px) {
      width: 40px;
      height: 40px;
      padding: 5px;
    }
  }

  &.bottom-floating-button {
    width: 50px;
    height: 50px;
    padding: 10px;
    background-color: ${customTomato};
    border: 1px solid ${customBlack};
    border-radius: 5px;
    animation: infinite 1s ${PulseAnimation};

    @media screen and (max-width: 600px) {
      width: 40px;
      height: 40px;
      padding: 5px;
    }
  }

  @media screen and (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;

export const IconImage = styled.img`
  height: 40px;
  width: 40px;
  transition: all 1s ease-in-out;
  animation: infinite 1s ${PulseAnimation};

  &:hover {
    cursor: pointer;
  }

  &.email {
    height: 38px;
    width: 38px;

    @media screen and (max-width: 450px) {
      height: 28px;
      width: 28px;
    }
  }

  @media screen and (max-width: 450px) {
    height: 30px;
    width: 30px;
  }
`;
