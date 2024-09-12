import EmailCell from "../../components/tables/email-cell.component";
import FormattedDateCell from "../../components/tables/formatted-date-cell.component";

import { BlackSpan } from "../../styles/span/span.styles";
import PayeeNameCell from "./payee-name-cell.component";

const INCOME_TABLE_COLUMNS = [
  {
    Header: "Payment Received On",
    accessor: "createdAtAsDateObjectForSearching",
    Cell: ({ value }) => {
      return <FormattedDateCell {...{ value }} />;
    },
  },
  {
    Header: "Amount received",
    accessor: "amount",
    Cell: ({ value }) => {
      return <BlackSpan>£{(value / 100).toFixed(2)}</BlackSpan>;
    },
  },
  {
    Header: "Payee Name",
    accessor: "name",
    Cell: ({ value }) => {
      return <PayeeNameCell {...{ value }} />;
    },
  },
  {
    Header: "Payee email",
    accessor: "email",
    Cell: ({ value }) => {
      return <EmailCell {...{ value }} />;
    },
  },
  {
    Header: "Receipt URL",
    accessor: "receipt_url",
    Cell: ({ value }) => {
      return (
        <a href={value}>
          <BlackSpan>tap to view</BlackSpan>
        </a>
      );
    },
  },
  {
    Header: "Payment Id",
    accessor: "payment_intent",
    Cell: ({ value }) => {
      return <BlackSpan>{value}</BlackSpan>;
    },
  },
];

export default INCOME_TABLE_COLUMNS;
