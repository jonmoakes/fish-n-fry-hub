import styled from "styled-components";

import { customBlack } from "../colors";

export const BlackHr = styled.hr`
  width: 90%;
  border: 1px solid ${customBlack};

  &.margin {
    margin-bottom: 50px;
  }
`;

export const HrWithMargin = styled(BlackHr)`
  margin: 30px auto 0px auto;
`;
