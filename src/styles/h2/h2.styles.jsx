import styled from "styled-components";
import { customBlack, customWhite, customYellow } from "../colors";

export const H2 = styled.h2`
  color: ${customYellow};
  text-shadow: 0.5px 0.5px 0.5px ${customBlack};
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

export const WhiteH2 = styled.h2`
  color: ${customWhite};
`;
