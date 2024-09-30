import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowShadowSpan } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const IntroAndRequiredData = () => (
  <ParentDiv>
    <Text>
      if you're on this page, it means you should have received an email saying
      that
      <br />'
      <YellowShadowSpan>
        one of your users has requested deletion of their account
      </YellowShadowSpan>
      '
    </Text>

    <BlackHr />
    <Text>
      to do this, we need the{" "}
      <YellowShadowSpan>users unique document ID</YellowShadowSpan> that you
      will find in the email.
    </Text>

    <Text>tap on the button below to show detailed instructions.</Text>
  </ParentDiv>
);

export default IntroAndRequiredData;
