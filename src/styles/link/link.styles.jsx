import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  customBlack,
  customBlue,
  customTomato,
  customWhite,
  customYellow,
} from "../colors";

export const StyledLink = styled(Link)`
  color: ${customBlue};
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    color: ${customTomato};

    @media screen and (max-width: 1366px) {
      color: ${customBlue};
    }
  }

  &.yellow {
    color: ${customYellow};

    &:hover {
      color: ${customTomato};

      @media screen and (max-width: 1366px) {
        color: ${customYellow};
      }
    }
  }
`;

export const WhiteStyledLink = styled(StyledLink)`
  color: ${customWhite};

  &:hover {
    color: ${customBlack};

    @media screen and (max-width: 1366px) {
      color: ${customWhite};
    }
  }
`;
