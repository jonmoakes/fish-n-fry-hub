import OrderCell from "../order-cell.component";
import OrderCreatedAtCell from "../order-created-at-cell.component";
import EmailCell from "../email-cell.component";
import OrderStatusCell from "./order-status-cell/order-status-cell.component";

export const ORDERS_OWNER_TABLE_COLUMNS = [
  {
    Header: "order",
    accessor: "order",
    Cell: ({ value }) => {
      return <OrderCell {...{ value }} />;
    },
  },
  {
    Header: "order status",
    accessor: "orderStatus",
    Cell: ({ row }) => {
      return <OrderStatusCell {...{ row }} />;
    },
  },
  {
    Header: "date / time placed",
    accessor: "createdAtAsDateObjectForSearching",
    Cell: ({ value }) => {
      return <OrderCreatedAtCell {...{ value }} />;
    },
  },
  {
    Header: "customer name",
    accessor: "customerName",
  },
  {
    Header: "customer email",
    accessor: "customerEmail",
    Cell: ({ value }) => {
      return <EmailCell {...{ value }} />;
    },
  },
  {
    Header: "Grand Total",
    accessor: "grandTotal",
  },
  {
    Header: "order id",
    accessor: "orderId",
  },
];
