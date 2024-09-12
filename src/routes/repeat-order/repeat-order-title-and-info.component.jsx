import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { LowercasedSpan } from "../../styles/span/span.styles";

const RepeatOrderTitleAndInfo = () => (
  <>
    <ParentDiv>
      <Title>repeat order</Title>
    </ParentDiv>

    <ParentDiv>
      <Text>
        these are the details of the items from your previous order that you
        want to place again.
      </Text>
      <Text>
        please check them ( paying particular attention to the quantity of the
        items(<LowercasedSpan>s</LowercasedSpan>) ) and if they are correct, tap
        the 'yes, details correct' button at the bottom of the screen and then
        enter your card details.
      </Text>
      <Text>the order will be placed once the payment is confirmed.</Text>
    </ParentDiv>
  </>
);

export default RepeatOrderTitleAndInfo;
