import styled from "styled-components";

import { ReactComponent as LoaderSVG } from "../../assets/loader.svg";
import { ReactComponent as StripeSVG } from "../../assets/stripe-logo.svg";

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
