import styled from "styled-components";

import { customBlack } from "../colors";

export const BlackHr = styled.hr`
  border-color: ${customBlack};
  width: 90%;
  border: 1px solid ${customBlack};
`;

export const HrWithMargin = styled.hr`
  margin: 35px auto;
  color: ${customBlack};
  width: 90%;
  border: 2px solid ${customBlack};
`;
