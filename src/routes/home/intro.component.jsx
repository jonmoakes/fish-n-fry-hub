import AppDetails from "./app-details.component";
import ProgressiveImg from "../../components/progressive-image/progressive-image.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { LowercasedSpan } from "../../styles/span/span.styles";

import FishAndChips from "../../assets/fish-and-chips-large.jpeg";
import FishAndChipsPlaceholder from "../../assets/fish-and-chips-placeholder.jpeg";
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
      <BlueH2>please note that this is a demonstration app!</BlueH2>
      <AppDetails />
      <ProgressiveImg
        src={FishAndChips}
        placeholderSrc={FishAndChipsPlaceholder}
        alt="fish and chips"
      />
    </ParentDiv>
  </>
);

export default Intro;
