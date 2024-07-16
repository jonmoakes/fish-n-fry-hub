import styled from "styled-components";

import { customBlack, customWhite } from "../colors";

export const Title = styled.h1`
  color: ${customWhite};
  text-shadow: 1px 1px 1px ${customBlack};

  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;
