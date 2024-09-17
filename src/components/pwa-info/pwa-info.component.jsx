import { ParentDiv } from "../../styles/div/div.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

const PwaInfo = () => (
  <ParentDiv>
    <H2>cross platform support</H2>

    <Text>
      our app is a{" "}
      <a
        className="red"
        href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
      >
        progressive web app.
      </a>
    </Text>
    <Text>
      this means that although the app is a website first, it can be installed
      on your mobile or tablet or computers home screen in just a few taps.
    </Text>
    <Text>
      you can then access it just like you would access an app that you have
      downloaded on the apple or google app stores, providing a native like full
      screen appearance!
    </Text>
  </ParentDiv>
);

export default PwaInfo;
