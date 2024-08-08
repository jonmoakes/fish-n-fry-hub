import useCheckoutItemLogic from "../../../checkout-item-hooks/use-checkout-item-logic";

import AddOnsTitle from "./add-ons-title.component";
import AddOnsCheeseSlice from "./add-ons-cheese-slice.component";
import AddOnsDonerMeat from "./add-ons-doner-meat.component";
import AddOnsGratedCheese from "./add-ons-grated-cheese.component";
import AddOnsSalad from "./add-ons-salad.component";

import { WhiteSpan } from "../../../../../../styles/span/span.styles";
import { BlackHr } from "../../../../../../styles/hr/hr.styles";

const ProductAddOns = ({ cartItemObject }) => {
  const {
    donerMeatChoice,
    gratedCheeseChoice,
    cheeseSliceChoice,
    saladChoice,
  } = cartItemObject;

  // need to pass cartItemObject here as the function in the hook relies on it.
  const { hasAnyAddOnOptionBeenChosen, hasAnyAddOnOptionButNoneChosen } =
    useCheckoutItemLogic(cartItemObject);

  return (
    <>
      <AddOnsTitle
        {...{ hasAnyAddOnOptionBeenChosen, hasAnyAddOnOptionButNoneChosen }}
      />

      {hasAnyAddOnOptionBeenChosen ? (
        <>
          <AddOnsCheeseSlice {...{ cheeseSliceChoice }} />
          <AddOnsDonerMeat {...{ donerMeatChoice }} />
          <AddOnsGratedCheese {...{ gratedCheeseChoice }} />
          <AddOnsSalad {...{ saladChoice }} />
          <BlackHr />
        </>
      ) : hasAnyAddOnOptionButNoneChosen ? (
        <>
          <WhiteSpan className="checkout">none chosen.</WhiteSpan>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default ProductAddOns;
