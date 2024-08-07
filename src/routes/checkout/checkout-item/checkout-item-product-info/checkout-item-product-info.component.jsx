import ProductName from "./sections/product-name.component";
import ProductSize from "./sections/product-size.component";
import ProductPie from "./sections/product-pie.component";
import ProductSauces from "./sections/product-sauces.component";
import ProductAddOns from "./sections/product-add-ons/product-add-ons.component";
import ProductMeats from "./sections/product-meats.component";
import ProductCondiments from "./sections/product-condiments.component";
import ProductSaltAndVinegar from "./sections/product-salt-and-vinegar.component";
import ProductCan from "./sections/product-can.component";
import ProductSpecialInstructions from "./sections/product-special-instructions.component";

import { CheckoutItemText } from "../../../../styles/span/span.styles";

const CheckoutItemProductInfo = ({ cartItemObject }) => (
  <>
    <CheckoutItemText>
      <ProductName {...{ cartItemObject }} />
      <ProductSize {...{ cartItemObject }} />
      <ProductPie {...{ cartItemObject }} />
      <ProductSauces {...{ cartItemObject }} />
      <ProductAddOns {...{ cartItemObject }} />
      <ProductMeats {...{ cartItemObject }} />
      <ProductCondiments {...{ cartItemObject }} />
      <ProductSaltAndVinegar {...{ cartItemObject }} />
      <ProductCan {...{ cartItemObject }} />
      <ProductSpecialInstructions {...{ cartItemObject }} />
    </CheckoutItemText>
  </>
);

export default CheckoutItemProductInfo;
