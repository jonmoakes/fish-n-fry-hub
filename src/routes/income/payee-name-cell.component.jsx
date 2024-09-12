import { BlackSpanHover } from "../../styles/span/span.styles";
import useIncomeFunctions from "./income-hooks/use-income-functions";

const PayeeNameCell = ({ value }) => {
  const { navigateToUsersPage } = useIncomeFunctions();
  return <BlackSpanHover onClick={navigateToUsersPage}>{value}</BlackSpanHover>;
};

export default PayeeNameCell;
