import { format } from "date-fns";

const OrderCreatedAtCell = ({ value }) => {
  console.log(value);
  const formattedDate = value ? format(value, "EEEE dd MMMM yyyy,") : value;
  const formattedTime = value ? format(value, "hh:mm a") : value; // 12-hour format with AM/PM
  return (
    <span>
      {formattedDate}
      <br />
      {formattedTime}
    </span>
  );
};

export default OrderCreatedAtCell;
