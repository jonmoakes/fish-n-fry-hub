import styled from "styled-components";

import { customBlack, customWhite } from "../colors";

export const StyledUnorderedList = styled.ul`
  padding-left: unset;
  display: table;
  margin: 10px auto;
  list-style-type: none;
`;

export const ListItem = styled.li`
  font-size: calc(1rem + 0.25vw);
  margin-bottom: 10px;
  color: ${customWhite};
  text-shadow: 1px 1px 1px ${customBlack};

  &.clickable {
    &:hover {
      cursor: pointer;
    }
  }
`;
