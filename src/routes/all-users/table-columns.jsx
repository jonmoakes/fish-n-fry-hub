import FormattedDateCell from "../../components/tables/formatted-date-cell.component";
import PhoneNumberCell from "../../components/tables/phone-number-cell.component";
import EmailCell from "../../components/tables/email-cell.component";

import { LowercasedSpan } from "../../styles/span/span.styles";

const TABLE_COLUMNS = [
  {
    Header: "name",
    accessor: "name",
  },
  {
    Header: "email",
    accessor: "email",
    Cell: ({ value }) => <EmailCell {...{ value }} />,
  },
  {
    Header: "phone number",
    accessor: "phoneNumber",
    Cell: ({ value }) => <PhoneNumberCell {...{ value }} />,
  },
  {
    Header: "User Id",
    accessor: "id",
    Cell: ({ value }) => {
      return <LowercasedSpan>{value}</LowercasedSpan>;
    },
  },
  {
    Header: "created On",
    accessor: "createdAtAsDateObjectForSearching",
    Cell: ({ value }) => {
      return <FormattedDateCell {...{ value }} />;
    },
  },
];

export default TABLE_COLUMNS;
