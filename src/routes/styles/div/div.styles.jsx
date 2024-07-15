import styled, { keyframes } from "styled-components";
import {
  slideInLeft,
  bounceInDown,
  rollIn,
  rotateInDownRight,
} from "react-animations";

import {
  customBlack,
  customGrey,
  customOrange,
  customWhite,
  customYellow,
  customLightGrey,
  customTomato,
  customLightPink,
} from "../colors";

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;
const rollInAnimation = keyframes`${rollIn}`;
const rotateInDownRightAnimation = keyframes`${rotateInDownRight}`;

// Navigation
export const Nav = styled.div`
  background-color: ${customYellow};
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid ${customBlack};
`;

export const LogoContainer = styled.div`
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

export const HamburgerContainer = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 1366px) {
    display: flex;
    align-items: center;
  }
`;

export const Menu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "showHamburgerMenu",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-bottom: ${(props) => (props.showHamburgerMenu ? "50px" : "0px")};
  border-top: ${(props) =>
    props.showHamburgerMenu ? `2px solid ${customBlack}` : "none"};
  border-bottom: ${(props) =>
    props.showHamburgerMenu ? `2px solid ${customBlack}` : "none"};

  @media screen and (max-width: 1366px) {
    padding-top: ${(props) => (props.showHamburgerMenu ? "20px" : "0px")};
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.showHamburgerMenu ? "700px" : "0px")};
    transition: ${(props) =>
      props.showHamburgerMenu ? "max-height 0.5s linear" : "none"};
    overflow: scroll;
    background-color: ${customYellow};
  }
`;

export const LoaderDiv = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 30;
  background-color: ${customBlack};
  opacity: 0.8;
`;

// Main Divs
export const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, ${customWhite}, ${customLightGrey});
  margin: 50px auto;
  width: 75%;
  height: auto;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 6px 6px 15px ${customBlack};
  padding: 10px;

  &.black {
    background: black;
    box-shadow: none;
  }

  &.bounce {
    animation: 2s ${bounceInDownAnimation};
  }

  &.left {
    animation: 2s ${slideInLeftAnimation};
  }

  &.amount {
    margin: -20px auto 30px auto;
    padding: 0px 10px;
    display: inline-block;
    width: 50%;
    animation: 1s ${rollInAnimation};

    @media screen and (max-width: 1366px) {
      width: 75%;
    }

    @media screen and (max-width: 600px) {
      width: 90%;
    }
  }

  &.clear-week {
    margin: 0px auto 30px auto;
  }

  @media screen and (max-width: 1366px) {
    box-shadow: none;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const AmountButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media screen and (max-width: 1366px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 850px) {
    margin-top: 50px;
  }
`;

export const InnerDiv = styled.div`
  width: 90%;
  height: auto;
  margin: 0px auto;

  @media screen and (max-width: 375px) {
    padding: 10px;
  }
`;

export const ErrorFallbackImageDiv = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
  margin: 100px auto 0px auto;
  background-color: ${customGrey};
  border: 1px solid ${customBlack};
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    height: 90%;
    width: 90%;
  }
`;

export const ImageDiv = styled.div`
  width: 30%;
  height: 30%;
  margin: 20px auto 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 850px) {
    width: 50%;
    height: 50%;
  }

  @media screen and (max-width: 450px) {
    width: 70%;
    height: 70%;
  }
`;

export const FeatureDiv = styled.div`
  width: 80%;
`;
export const RelativePositionDiv = styled.div`
  position: relative;
  width: 100%;
`;

export const ErrorDiv = styled.div`
  background-color: ${customGrey};
  padding: 10px 10px 30px 10px;
  border: 2px solid ${customBlack};
  border-radius: 5px;
  margin: 0px auto;
  width: 75%;
  height: auto;
  box-shadow: 6px 6px 15px ${customBlack};
  padding: 0px 10px;

  &.fetch-error {
    margin: 20px auto;
  }

  @media screen and (max-width: 1366px) {
    box-shadow: none;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const WarningDiv = styled(ErrorDiv)`
  width: 50%;
  margin: 30px auto 50px auto;
  background-color: ${customOrange};
  box-shadow: 12px 12px 12px ${customBlack};
  padding: 0px 10px;

  @media screen and (max-width: 1366px) {
    width: 70%;
    box-shadow: none;
  }

  @media screen and (max-width: 450px) {
    width: 85%;
  }
`;

export const PaymentErrorDiv = styled(WarningDiv)`
  background-color: ${customTomato};
`;

export const CardInputDiv = styled.div`
  background-color: ${customLightGrey};
  height: 60px;
  width: 50%;
  margin: 10px auto 40px auto;
  padding: 20px 20px 30px 20px;
  border-radius: 5px;
  border: 2px solid ${customBlack};

  @media screen and (max-width: 1366px) {
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const StripeLogoDiv = styled.div`
  margin: 0px auto;
  width: 100%;
  animation: 3s ${rollInAnimation};
`;

export const TopMarginDiv = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Accordion = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "shouldShowElement",
})`
  width: ${({ shouldShowElement }) => (shouldShowElement ? "70%" : "30%")};
  margin: 2rem auto;
  border: 2px solid ${customBlack};
  border-radius: 5px;

  &.funds-help {
    margin: 20px auto 10px auto;
  }

  &.table {
    margin: 10px auto 20px auto;
    width: 50%;

    @media screen and (max-width: 1366px) {
      width: 90%;
    }
  }

  &.small-top-margin {
    margin: 10px auto 2rem auto;
  }

  @media screen and (max-width: 1366px) {
    width: ${({ shouldShowElement }) => (shouldShowElement ? "90%" : "50%")};
  }

  @media screen and (max-width: 450px) {
    width: ${({ shouldShowElement }) => (shouldShowElement ? "90%" : "70%")};
  }
`;

export const AccordionTitle = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "shouldShowElement",
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${({ shouldShowElement }) =>
    shouldShowElement ? customYellow : customGrey};
  padding: 0.5rem;
  border-bottom: ${({ shouldShowElement }) =>
    shouldShowElement ? `2px solid ${customBlack}` : "none"};
  border-radius: ${({ shouldShowElement }) =>
    shouldShowElement ? "5px 5px 0px 0px" : "5px 5px 5px 5px"};

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`;

// SecondAccordion is for if there are 2 accordions on a page as they have separate states.
export const SecondAccordion = styled(Accordion).withConfig({
  shouldForwardProp: (prop) => prop !== "shouldShowSecondElement",
})`
  &.book-session {
    margin: 20px auto;
  }

  width: ${({ shouldShowSecondElement }) =>
    shouldShowSecondElement ? "70%" : "30%"};

  @media screen and (max-width: 1366px) {
    width: ${({ shouldShowSecondElement }) =>
      shouldShowSecondElement ? "90%" : "50%"};
  }

  @media screen and (max-width: 450px) {
    width: ${({ shouldShowSecondElement }) =>
      shouldShowSecondElement ? "90%" : "70%"};
  }
`;

// SecondAccordion is for if there are 2 accordions on a page as they have separate states.
export const SecondAccordionTitle = styled(AccordionTitle).withConfig({
  shouldForwardProp: (prop) => prop !== "shouldShowSecondElement",
})`
  background-color: ${({ shouldShowSecondElement }) =>
    shouldShowSecondElement ? customYellow : customGrey};
  border-bottom: ${({ shouldShowSecondElement }) =>
    shouldShowSecondElement ? `2px solid ${customBlack}` : "none"};
  border-radius: ${({ shouldShowSecondElement }) =>
    shouldShowSecondElement ? "5px 5px 0px 0px" : "5px 5px 5px 5px"};
`;

// ThirdAccordion is for if there are 3 accordions on a page as they have separate states.
export const ThirdAccordion = styled(Accordion).withConfig({
  shouldForwardProp: (prop) => prop !== "shouldShowThirdElement",
})`
  &.book-session {
    margin: 20px auto;
  }

  width: ${({ shouldShowThirdElement }) =>
    shouldShowThirdElement ? "70%" : "30%"};

  @media screen and (max-width: 1366px) {
    width: ${({ shouldShowThirdElement }) =>
      shouldShowThirdElement ? "90%" : "50%"};
  }

  @media screen and (max-width: 450px) {
    width: ${({ shouldShowThirdElement }) =>
      shouldShowThirdElement ? "90%" : "70%"};
  }
`;

// ThirdAccordion is for if there are 3 accordions on a page as they have separate states.
export const ThirdAccordionTitle = styled(AccordionTitle).withConfig({
  shouldForwardProp: (prop) => prop !== "shouldShowThirdElement",
})`
  background-color: ${({ shouldShowThirdElement }) =>
    shouldShowThirdElement ? customYellow : customGrey};
  border-bottom: ${({ shouldShowThirdElement }) =>
    shouldShowThirdElement ? `2px solid ${customBlack}` : "none"};
  border-radius: ${({ shouldShowThirdElement }) =>
    shouldShowThirdElement ? "5px 5px 0px 0px" : "5px 5px 5px 5px"};
`;

export const AccordionContent = styled.div`
  padding: 1rem;
  background-color: ${customGrey};
  border-radius: 0px 0px 15px 15px;
  animation: 0.5s ${rollInAnimation};
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  &.button {
    margin: 20px auto;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const TableEditsButtonDiv = styled.div`
  width: 100%;
  margin: 50px auto;

  @media screen and (max-width: 450px) {
    margin: 0px auto 40px auto;
  }
`;

export const RadioDiv = styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;

  flex-direction: column;
  padding: 10px 0px;
`;

// tables
export const TableContainer = styled.div`
  width: 90%;
  animation: 1.5s ${bounceInDownAnimation};
  margin: 0px auto;
  height: auto;
  border-radius: 15px;
  padding: 0px 20px 0px 20px;

  @media screen and (max-width: 450px) {
    width: 90%;
    padding: 0px 10px 0px 10px;
  }
`;

export const TableDiv = styled.div`
  margin: 0px auto 100px auto;
  width: 75%;
  height: auto;

  &.user-bookings {
    margin: 20px auto 100px auto;

    @media screen and (max-width: 1366px) {
      margin: 25px auto 100px auto;
    }

    @media screen and (max-width: 850px) {
      margin: 70px auto 100px auto;
    }

    @media screen and (max-width: 450px) {
      margin: 40px auto 100px auto;
    }
  }

  @media screen and (max-width: 1366px) {
    width: 95%;
    overflow: auto;
    border: 2px solid ${customBlack};
    box-shadow: none;
    margin: 20px auto 100px auto;
  }
`;

export const PaginationDiv = styled(ParentDiv)`
  margin: -150px auto 0px auto;
  width: 50%;
  border: 2px solid ${customBlack};
  box-shadow: none;
  background-color: ${customGrey};
  padding-bottom: 20px;

  @media screen and (max-width: 1366px) {
    margin: -50px auto 0px auto;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const PaginationTextDiv = styled.div`
  margin-bottom: 20px;
`;

export const TableSearchDiv = styled.div`
  width: 50%;
  position: relative;
  margin: 0px auto -30px auto;
  animation: 0.5s ${slideInLeftAnimation};

  &.no-checkbox {
    margin: 0px auto 0px auto;

    @media screen and (max-width: 450px) {
      margin: 0px auto 40px auto;
    }
  }

  @media screen and (max-width: 1366px) {
    width: 70%;
  }

  @media screen and (max-width: 450px) {
    width: 80%;
    margin: 0px auto 0px auto;
  }
`;

export const FilterEntriesButtonDiv = styled.div`
  width: 90%;
  margin: 0px auto 20px auto;

  @media screen and (max-width: 850px) {
    margin: 50px auto 20px auto;
  }

  @media screen and (max-width: 450px) {
    margin: 20px auto 20px auto;
  }
`;

export const NoSearchResultDiv = styled.div`
  width: 50%;
  height: auto;
  margin: 30px auto;
  background-color: ${customWhite};
  padding: 20px;
  border-radius: 15px;
  animation: 0.5s ${bounceInDownAnimation};
  border: 2px solid ${customBlack};

  &.no-search {
    margin: -10px auto 40px auto;

    @media screen and (max-width: 850px) {
      margin: 40px auto;
    }
  }

  @media screen and (max-width: 1366px) {
    width: 80%;
  }

  @media screen and (max-width: 850px) {
    margin: 50px auto -50px auto;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  @media screen and (max-width: 450px) {
    margin: 30px auto -10px auto;
  }
`;

export const ForgotPasswordDiv = styled.div`
  margin-top: 20px;
`;

export const TableCellErrorDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  animation: 0.5s ${rotateInDownRightAnimation};
`;

export const InLineDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmergencyDetailsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PinkDiv = styled.div`
  background-color: ${customLightPink};
  padding: 0px 10px;
  border: 1px solid ${customBlack};
  border-radius: 5px;
`;
