import styled from "styled-components";

import LoaderSVG from "../../assets/loader.svg?react";
import StripeSVG from "../../assets/stripe-logo.svg?react";
import AddArrowSVG from "../../assets/add-arrow.svg?react";
import MinusArrowSVG from "../../assets/minus-arrow.svg?react";

export const StripeLogo = styled(StripeSVG)`
  width: 300px;
  height: auto;
  margin-top: -80px;
  border-radius: 15px;
  padding: 20px;

  @media screen and (max-width: 600px) {
    width: 200px;
  }

  @media screen and (max-width: 450px) {
    margin-top: -70px;
  }

  @media screen and (max-width: 320px) {
    width: 100px;
    margin-top: -45px;
  }
`;
export const LoaderIcon = styled(LoaderSVG)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 30%;
  width: 30%;
`;

export const AddArrow = styled(AddArrowSVG)`
  cursor: pointer;
`;

export const MinusArrow = styled(MinusArrowSVG)`
  cursor: pointer;
`;
