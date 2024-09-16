import OrderCell from "../../components/tables/order-cell.component";
import OrderCreatedAtCell from "../../components/tables/order-created-at-cell.component";
import OrderAgainButton from "./order-again-button.component";

const ORDERS_CUSTOMER_TABLE_COLUMNS = [
  {
    Header: "order",
    accessor: "order",
    id: "order",
    Cell: ({ value }) => {
      return <OrderCell {...{ value }} />;
    },
  },
  {
    Header: "date / time placed",
    accessor: "createdAtAsDateObjectForSearching",
    id: "createdAtAsDateObjectForSearching",
    Cell: ({ value }) => {
      return <OrderCreatedAtCell {...{ value }} />;
    },
  },
  {
    Header: "order price",
    accessor: "grandTotal",
    id: "grandTotal",
  },
  {
    Header: "order again",
    accessor: "orderId",
    id: "orderAgain",
    Cell: ({ value }) => {
      return <OrderAgainButton {...{ value }} />;
    },
  },
  {
    Header: "order id",
    accessor: "orderId",
    id: "orderId",
  },
];

export default ORDERS_CUSTOMER_TABLE_COLUMNS;
