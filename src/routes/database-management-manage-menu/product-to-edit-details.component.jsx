import ProductToUpdateName from "./product-to-update-name.component";
import SizeOptionDoublePrice from "./attributes-to-update/size-option-double-price.component";
import SizeOptionTripePrice from "./attributes-to-update/size-option-triple-price.component";

import BasePrice from "./attributes-to-update/base-price.component";
import CheeseSlice from "./attributes-to-update/sauces/number-of-sauces.component";
import NumberOfSauces from "./attributes-to-update/sauces/number-of-sauces.component";

const ProductToEditDetails = () => (
  <>
    <ProductToUpdateName />
    <BasePrice />
    <SizeOptionDoublePrice />
    <SizeOptionTripePrice />
    <NumberOfSauces />
  </>
);

export default ProductToEditDetails;
