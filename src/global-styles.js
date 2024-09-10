import { createGlobalStyle } from "styled-components";
import {
  customBlack,
  customBlue,
  customLightGrey,
  customTomato,
} from "./styles/colors";

export const GlobalStyle = createGlobalStyle`
    html {
        width:100%;
        height:100vh;
        background-color: ${customLightGrey};
    }
    body {
        margin: 0px auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight:bold;
        width:100%;
        height:100%;
        text-align:center;
        text-transform:capitalize;
        position: relative;

        p {
            font-size: calc(1rem + 0.25vw);
        }

        ul {
            padding-left: unset;
            display: table;
            margin: 10px auto 0px auto;
            font-size:18px;
            list-style-type: none;
        }
          
        li {
            margin-bottom: 20px;
            text-shadow: none;
            color: ${customBlack};

            @media screen and (max-width: 600px) {
            font-size: 16px;
            }

            @media screen and (max-width: 450px) {
            font-size: 14px;
            }
        }

        a {
            color: ${customBlue};
            text-decoration: none;

            &:hover {
                color: ${customTomato};
            }
        }
    }
`;
