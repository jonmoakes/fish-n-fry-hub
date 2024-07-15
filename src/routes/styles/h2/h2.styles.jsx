import styled from "styled-components";
import { customBlack, customBlue } from "../colors";

export const BlueH2 = styled.h2`
  color: ${customBlue};
  text-decoration: underline;

  &.no-underline {
    text-decoration: none;
  }
`;

export const BlackH2 = styled.h2`
  color: ${customBlack};
  text-decoration: underline;

  &.no-underline {
    text-decoration: none;
  }
`;
