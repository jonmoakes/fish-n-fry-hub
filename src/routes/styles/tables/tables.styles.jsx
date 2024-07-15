import styled, { keyframes } from "styled-components";
import { fadeInLeft, fadeInRight } from "react-animations";

import {
  customBlack,
  customCyan,
  customGrey,
  customLightGreen,
  customLightPink,
  customOrange,
  customTan,
  customWhite,
  customYellow,
} from "../colors";

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const TableWithStyle = styled.table`
  border-collapse: collapse;
  margin: 0px auto 200px auto;
  text-shadow: none;
  white-space: pre-line;
  width: 100%;

  th {
    font-size: 16px;
    background-color: ${customBlack};
    padding: 20px 5px;
    border: 2px solid ${customBlack};
    width: auto;
    color: ${customBlack};
    background-color: ${customYellow};
    animation: 0.5s ${fadeInLeftAnimation};
  }

  tr {
    background-color: ${customGrey};
    animation: 0.5s ${fadeInRightAnimation};
    &:nth-child(even) {
      background-color: ${customLightGreen};
      animation: 0.5s ${fadeInLeftAnimation};
    }
  }

  td {
    border: 3px solid ${customBlack};
    padding: 20px 10px;
    width: auto;
    @media screen and (max-width: 600px) {
      font-size: 14px;
    }

    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1366px) {
    width: 200%;
    margin: 0px auto 0px auto;
  }
`;

export const MondayCell = styled.td`
  background-color: ${customTan};
`;

export const TuesdayCell = styled.td`
  background-color: ${customWhite};
`;

export const WednesdayCell = styled.td`
  background-color: ${customLightPink};
`;

export const ThursdayCell = styled.td`
  background-color: ${customCyan};
`;

export const FridayCell = styled.td`
  background-color: ${customOrange};
`;
