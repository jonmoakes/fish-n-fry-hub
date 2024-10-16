import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const RepeatOrderDetails = ({ repeatOrderForDisplayingToUser }) => (
  <>
    {repeatOrderForDisplayingToUser ? (
      repeatOrderForDisplayingToUser.map((order, index) => (
        <ParentDiv className="repeat-order" key={index}>
          <Text className="repeat-order">{order.replace(/[*_]/g, "")}</Text>
        </ParentDiv>
      ))
    ) : (
      <ParentDiv className="repeat-order">
        <Text>no order found...</Text>
      </ParentDiv>
    )}
  </>
);

export default RepeatOrderDetails;
