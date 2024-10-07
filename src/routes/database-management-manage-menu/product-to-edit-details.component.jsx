import ProductToUpdateName from "./product-to-update-name.component";
import SizeOptionDoublePrice from "./attributes-to-update/size-option-double-price.component";
import SizeOptionTripePrice from "./attributes-to-update/size-option-triple-price.component";

import BasePrice from "./attributes-to-update/base-price.component";
import DeleteProduct from "./attributes-to-update/delete-product.component";

const ProductToEditDetails = () => (
  <>
    <ProductToUpdateName />
    <BasePrice />
    <SizeOptionDoublePrice />
    <SizeOptionTripePrice />
    <DeleteProduct />
  </>
);

export default ProductToEditDetails;
