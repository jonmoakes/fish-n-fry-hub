import styled from "styled-components";
import {
  customBlack,
  customLightGreen,
  customTomato,
  customWhite,
  customYellow,
} from "../colors";

export const H2 = styled.h2`
  color: ${customYellow};
  text-shadow: 0.5px 0.5px 0.5px ${customBlack};
`;

export const TotalPriceH2 = styled.h2`
  color: ${customLightGreen};
  background-color: ${customBlack};
  padding: 5px 10px;
  border-radius: 5px;
  text-transform: capitalize;
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
  text-shadow: 1px 1px 1px ${customBlack};
`;

export const RedH2 = styled.h2`
  color: ${customTomato};
  text-shadow: 1px 1px 1px ${customBlack};
`;
