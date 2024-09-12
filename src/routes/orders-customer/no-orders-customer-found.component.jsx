import useOrdersCustomerLogic from "./orders-customer-hooks/use-orders-customer-logic";

import NoOrdersMadeYet from "../../components/tables/no-orders-made-yet.component";

const NoOrdersCustomerFound = () => {
  const { noOrdersMadeYet } = useOrdersCustomerLogic();

  return <>{noOrdersMadeYet() ? <NoOrdersMadeYet /> : null}</>;
};

export default NoOrdersCustomerFound;
