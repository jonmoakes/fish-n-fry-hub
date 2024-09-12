import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const RepeatOrderDetails = ({ orderToRepeatDetails }) => (
  <>
    {orderToRepeatDetails.order?.map((order, index) => (
      <ParentDiv className="repeat-order" key={index}>
        <Text className="repeat-order">{order.replace(/[*_]/g, "")}</Text>
      </ParentDiv>
    ))}
  </>
);

export default RepeatOrderDetails;
