import styled, { keyframes } from "styled-components";
import { bounceInDown, slideInRight } from "react-animations";

import {
  customBlue,
  customBlack,
  customWhite,
  customYellow,
  customLightGreen,
  customLightGrey,
  customTomato,
} from "../colors";

const bounceInDownAnimation = keyframes`${bounceInDown}`;
const slideInRightAnimation = keyframes`${slideInRight}`;

export const Form = styled.form`
  width: 75%;
  padding: 30px 0px;
  margin: 20px auto 70px auto;
  background-color: ${customBlue};
  border: 2px solid ${customBlack};
  border-radius: 5px;

  &.below-accordion {
    margin: 20px auto 70px auto;
  }

  &.add-funds {
    margin: 0px auto 30px auto;
  }

  &.book-session {
    margin: 20px auto 20px auto;
  }

  &.emergency-contacts {
    margin: 20px auto;
  }

  input {
    accent-color: ${customLightGreen};

    &.red {
      accent-color: ${customTomato};
    }
  }

  input[type="radio"] {
    display: flex;
    margin: 10px auto;
    justify-content: center;
    width: 20px;
    height: 20px;
  }

  @media screen and (max-width: 1366px) {
    width: 90%;
  }

  @media screen and (max-width: 450px) {
    width: 95%;
    padding: 20px 0px;
  }
`;

export const StyledInput = styled.input`
  width: 95%;
  height: 50px;
  padding: 12px;
  border: 2px solid ${customBlack};
  border-radius: 5px;
  box-sizing: border-box;
  margin: 10px auto;
  font-size: 18px;
  font-family: inherit;
  outline: none;
  background: radial-gradient(circle, ${customWhite}, ${customLightGrey});
  appearance: none;
  color: ${customBlack};

  &.week-filter {
    width: auto;
    padding: 0px 10px;
    height: 30px;
    margin: -30px auto 30px auto;
    animation: 0.5s ${slideInRightAnimation};

    @media screen and (max-width: 1366px) {
      margin: -20px auto 30px auto;
    }

    @media screen and (max-width: 850px) {
      margin: -20px auto 30px auto;
    }

    @media screen and (max-width: 450px) {
      margin: 0px auto 30px auto;
    }
  }

  &:focus {
    border: 2px solid ${customTomato};
    box-shadow: 6px 6px 6px ${customBlack};
  }

  &::placeholder {
    text-transform: capitalize;
  }

  &::-webkit-input-placeholder {
    text-transform: capitalize;
  }

  &::-moz-placeholder {
    text-transform: capitalize;
  }

  &:-ms-input-placeholder {
    text-transform: capitalize;
  }

  &::-ms-input-placeholder {
    text-transform: capitalize;
  }

  @media screen and (max-width: 1366px) {
    &:focus {
      box-shadow: none;
    }
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;

    &::-webkit-input-placeholder {
      font-size: 16px;
    }

    &::-moz-placeholder {
      font-size: 16px;
    }

    &:-ms-input-placeholder {
      font-size: 16px;
    }

    &::-ms-input-placeholder {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 320px) {
    height: 40px;
  }

  @media screen and (max-width: 280px) {
    &::-webkit-input-placeholder {
      font-size: 14px;
    }

    &::-moz-placeholder {
      font-size: 14px;
    }

    &:-ms-input-placeholder {
      font-size: 14px;
    }

    &::-ms-input-placeholder {
      font-size: 14px;
    }
  }
`;

export const PasswordInput = styled(StyledInput)`
  padding-right: 36px;
`;

export const CapitalizedInput = styled(StyledInput)`
  text-transform: capitalize;
`;

export const LowercasedInput = styled(StyledInput)`
  text-transform: lowercase;
`;

export const UppercasedInput = styled(StyledInput)`
  text-transform: uppercase;
`;

export const StyledTextArea = styled.textarea`
  width: 95%;
  padding: 12px;
  border: 2px solid ${customBlack};
  border-radius: 5px;
  box-sizing: border-box;
  margin: 10px auto 30px auto;
  font-size: 18px;
  height: 200px;
  font-family: inherit;
  outline: none;
  text-transform: capitalize;
  background: radial-gradient(circle, ${customWhite}, ${customLightGrey});
  color: ${customBlack};

  &.small-bottom-margin {
    margin: 10px auto;
  }

  &:focus {
    border: 3px solid ${customTomato};
    box-shadow: 6px 6px 6px ${customBlack};
  }

  @media screen and (max-width: 1366px) {
    &:focus {
      box-shadow: none;
    }
  }

  @media screen and (max-width: 600px) {
    &::-webkit-input-placeholder {
      font-size: 16px;
    }

    &::-moz-placeholder {
      font-size: 16px;
    }

    &:-ms-input-placeholder {
      font-size: 16px;
    }

    &::-ms-input-placeholder {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    &::-webkit-input-placeholder {
      font-size: 14px;
    }

    &::-moz-placeholder {
      font-size: 14px;
    }

    &:-ms-input-placeholder {
      font-size: 14px;
    }

    &::-ms-input-placeholder {
      font-size: 14px;
    }
  }
`;

export const StyledSelect = styled.select`
  width: 95%;
  height: 50px;
  padding: 12px;
  border: 2px solid ${customBlack};
  border-radius: 5px;
  box-shadow: 6px 6px 6px ${customBlack};
  box-sizing: border-box;
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 18px;
  outline: none;
  background: radial-gradient(circle, ${customWhite}, ${customLightGrey});
  color: ${customBlack};
  text-transform: capitalize;

  &:focus {
    border-color: ${customTomato};
  }

  @media screen and (max-width: 1000px) {
    width: 95%;
  }

  @media screen and (max-width: 600px) {
    height: 50px;
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }

  @media screen and (max-width: 320px) {
    height: 40px;
    font-size: 12px;
  }
`;

export const PaginationSelect = styled.select`
  width: 200px;
  height: 40px;
  background: radial-gradient(circle, ${customWhite}, ${customLightGrey});
  color: ${customBlack};
  padding: 10px;
  border-radius: 5px;
  border: 2px solid ${customBlack};
  outline: none;
  font-size: 16px;
`;

export const Label = styled.label`
  font-size: 18px;
  color: ${customYellow};
  text-shadow: 1px 1px 1px ${customBlack};
  float: left;
  padding-left: 20px;

  &.book-session {
    float: unset;
    padding-left: 0px;
    text-align: center;
  }

  @media screen and (max-width: 1000px) {
    padding-left: 15px;
  }

  @media screen and (max-width: 600px) {
    padding-left: 10px;
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const PaginationInput = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid ${customBlack};
  background: radial-gradient(circle, ${customWhite}, ${customLightGrey});
  text-align: center;
`;

export const SearchInput = styled.input`
  margin: 0px auto 50px auto;
  padding: 0px;
  width: 100%;
  outline: none;
  height: 50px;
  border-radius: 5px;
  background: radial-gradient(circle, ${customWhite}, ${customLightGrey});
  outline: none;
  border: 2px solid ${customBlack};
  padding-left: 20px;
  font-family: inherit;
  font-size: 20px;

  &:focus {
    box-shadow: 4px 4px 4px black;
    border-color: ${customTomato};
  }

  /* clears the ‘X’ from Internet Explorer */
  ::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  ::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  /* clears the ‘X’ from Chrome */
  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }

  :-webkit-input-placeholder {
    font-size: 16px;

    @media screen and (max-width: 280px) {
      font-size: 14px;
    }
  }

  ::-moz-placeholder {
    font-size: 16px;

    @media screen and (max-width: 280px) {
      font-size: 14px;
    }
  }
  :-ms-input-placeholder {
    font-size: 16px;

    @media screen and (max-width: 280px) {
      font-size: 14px;
    }
  }
  ::placeholder {
    font-size: 16px;

    @media screen and (max-width: 280px) {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 850px) {
    margin: 0px auto 0px auto;
  }
  @media screen and (max-width: 450px) {
    height: 40px;
  }

  @media screen and (max-width: 320px) {
    padding-left: 5px;
  }
`;

export const StyledCheckbox = styled.input`
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  background-color: transparent;
  /* Not removed via appearance */
  margin: 10px auto 0px auto;
  font-family: inherit;
  background-color: lightgrey;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid black;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 0.9rem;
    height: 0.9rem;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(black);
    /* Windows High Contrast Mode */
    background-color: black;
  }

  &:checked::before {
    transform: scale(1);
  }

  &:focus {
    outline: max(2px, 0.15em) solid black;
  }
`;

export const OptionsForm = styled.form`
  width: 50%;
  height: auto;
  background-color: ${customBlue};
  margin: 20px auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 20px 0px;
  animation: 0.5s ${bounceInDownAnimation};
  border: 2px solid ${customBlack};

  @media screen and (max-width: 1366px) {
    width: 70%;
    padding: 10px 0px 20px 0px;
  }

  @media screen and (max-width: 850px) {
    padding: 5px 0px 10px 0px;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    padding: 5px 10px 10px 10px;
  }
`;
