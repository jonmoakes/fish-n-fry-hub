import AppDetails from "./app-details.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { LowercasedSpan } from "../../styles/span/span.styles";
import { Text } from "../../styles/p/p.styles";

const Intro = () => (
  <>
    <ParentDiv>
      <Title>
        welcome to the fish '<LowercasedSpan>n</LowercasedSpan>' fry hub
      </Title>
    </ParentDiv>
    <ParentDiv>
      <Text>online ordering app for fish & chip shops!</Text>
      <H2>please note that this is a demonstration app!</H2>
      <AppDetails />
    </ParentDiv>
  </>
);

export default Intro;
