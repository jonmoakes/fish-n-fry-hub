import OrderCell from "./order-cell.component";
import OrderCreatedAtCell from "../../components/tables/order-created-at-cell.component";
import EmailCell from "../../components/tables/email-cell.component";

export const ORDERS_OWNER_TABLE_COLUMNS = [
  {
    Header: "order",
    accessor: "order",
    Cell: ({ value }) => {
      return <OrderCell {...{ value }} />;
    },
  },
  {
    Header: "date / time placed",
    accessor: "createdAtAsDateObjectForSorting",
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
