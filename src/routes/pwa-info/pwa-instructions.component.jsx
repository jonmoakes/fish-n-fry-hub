import { ParentDiv } from "../../styles/div/div.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

import MobileInstructions from "./mobile-instructions.component";
import DesktopInstructions from "./desktop-instructions.component";
import InstallPWA from "./install-pwa.component";

const PwaInstructions = () => (
  <>
    <ParentDiv>
      <H2>how do i do it?</H2>

      <Text>
        the simplist way is if you see a button directly below that says
        'install app', simply tap it!
      </Text>
      <Text>
        please note, if you don't see a button directly below this line, it
        means your browser may not support installing the app via this method.
      </Text>
      <Text>instead, please follow the instructions below:</Text>

      <InstallPWA />

      <Text>
        installing the app to your home screen is easy and recommended!
      </Text>
      <Text>
        below is a list of instructions depending on what device you are using.
      </Text>
    </ParentDiv>

    <MobileInstructions />
    <DesktopInstructions />

    <ParentDiv>
      <Text>
        please note, instructions are subject to change by the browser.
      </Text>
      <Text>
        please check out your browsers help section if you encounter any issues!
      </Text>
    </ParentDiv>
  </>
);

export default PwaInstructions;
