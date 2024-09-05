import styled from "styled-components";
import {
  customBlack,
  customTomato,
  customWhite,
  customYellow,
} from "../colors";

export const Text = styled.p`
  color: ${customWhite};
  text-shadow: 1px 1px 1px ${customBlack};

  &.lowercased {
    text-transform: lowercase;
  }

  &.amount {
    font-size: 16px;
    margin: 10px auto;
  }
`;

export const BlackText = styled.p`
  color: ${customBlack};
`;

export const YellowText = styled.p`
  color: ${customYellow};
`;

export const RedText = styled(Text)`
  color: ${customTomato};

  &.underline {
    text-decoration: underline;
    text-decoration-color: ${customBlack};
  }
`;

export const ItalicStripeText = styled.p`
  font-style: italic;
  color: ${customBlack};
`;

export const NavLink = styled.p`
  padding: 0.1rem 1.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.2);

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
    }
  }
`;

export const ErrorImageText = styled.p`
  color: ${customWhite};
  text-align: center;
  padding: 5px;
`;

export const PaginationText = styled.p`
  color: ${customBlack};
`;

export const AdditionalPrice = styled.p`
  font-size: 16px;
  color: ${customBlack};
  text-shadow: none;
  margin-top: -15px;
`;

export const OptionsLabel = styled.p`
  color: ${customBlack};
  margin-top: 5px;
`;

export const RequiredError = styled.p`
  /* margin-top: -20px; */
  color: ${customTomato};
  text-shadow: 1px 1px 1px ${customBlack};
  background-color: ${customBlack};
  padding: 5px 10px;
  border-radius: 2px;
`;
