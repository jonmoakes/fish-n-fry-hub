import styled from "styled-components";
import { customBlack, customTomato, customWhite } from "../colors";

export const Text = styled.p`
  color: ${customBlack};

  &.lowercased {
    text-transform: lowercase;
  }

  &.amount {
    font-size: 16px;
    margin: 10px auto;
  }
`;

export const WhiteText = styled(Text)`
  color: ${customWhite};
`;

export const WhiteShadowText = styled(Text)`
  color: ${customWhite};
  text-shadow: 1px 1px 1px ${customBlack};
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
  color: ${customBlack};
  text-align: center;
  padding: 5px 5px 5px 5px;
`;

export const PaginationText = styled.p`
  color: ${customBlack};
`;
