import styled from "styled-components";

import { customBlack } from "../colors";

export const Title = styled.h1`
  color: ${customBlack};

  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;
