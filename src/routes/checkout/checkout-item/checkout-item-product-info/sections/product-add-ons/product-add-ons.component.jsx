import AddOnsTitle from "./add-ons-title.component";
import AddOnsCheeseSlice from "./add-ons-cheese-slice.component";
import AddOnsDonerMeat from "./add-ons-doner-meat.component";
import AddOnsGratedCheese from "./add-ons-grated-cheese.component";
import AddOnsSalad from "./add-ons-salad.component";

import { WhiteSpan } from "../../../../../../styles/span/span.styles";
import { BlackHr } from "../../../../../../styles/hr/hr.styles";
import useCheckoutItemHooks from "../../../checkout-item-hooks/use-checkout-item-hooks";

const ProductAddOns = ({ cartItemObject }) => {
  const {
    donerMeatChoice,
    gratedCheeseChoice,
    cheeseSliceChoice,
    saladChoice,
  } = cartItemObject;

  const { hasAnyAddOnOptionBeenChosen, hasAnyAddOnOptionButNoneChosen } =
    useCheckoutItemHooks(cartItemObject);

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
