import styled from "styled-components";

import { customBlack, customBlue } from "../colors";

export const StyledUnorderedList = styled.ul`
  padding-left: unset;
  display: table;
  margin: 10px auto;
  list-style-type: none;
`;

export const BlueListItem = styled.li`
  font-size: calc(1rem + 0.25vw);
  margin-bottom: 10px;
  color: ${customBlue};

  &.clickable {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const BlackListItem = styled(BlueListItem)`
  color: ${customBlack};
`;
