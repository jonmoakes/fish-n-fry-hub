import { BlackHr } from "../../../../../styles/hr/hr.styles";

import { replacePartOfString } from "../../../../../functions/replace-part-of-string";
import useCheckoutItemLogic from "../../checkout-item-hooks/use-checkout-item-logic";

const ProductName = ({ cartItemObject }) => {
  const { name } = cartItemObject;

  // need to pass cartItemObject here as the function in the hook relies on it.
  const { hasAnyOption } = useCheckoutItemLogic(cartItemObject);

  return (
    <>
      {replacePartOfString(name, "fish", "")}
      {hasAnyOption ? (
        <>
          <br />
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default ProductName;
