import useOrdersOwnerLogic from "./orders-owner-hooks/use-orders-owner-logic";

import NoOrdersMadeYet from "../../components/tables/no-orders-made-yet.component";

const NoBookingDataFound = () => {
  const { noOrdersMadeYet } = useOrdersOwnerLogic();

  return <>{noOrdersMadeYet() ? <NoOrdersMadeYet /> : null}</>;
};

export default NoBookingDataFound;
