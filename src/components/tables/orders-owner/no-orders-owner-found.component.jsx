import useOrdersOwnerLogic from "./orders-owner-hooks/use-orders-owner-logic";

import NoOrdersMadeYet from "../no-orders-made-yet.component";

const NoOrdersOwnerFound = () => {
  const { noOrdersMadeYet } = useOrdersOwnerLogic();

  return <>{noOrdersMadeYet() ? <NoOrdersMadeYet /> : null}</>;
};

export default NoOrdersOwnerFound;
