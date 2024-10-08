import useManageMenuLogic from "../hooks/use-manage-menu-logic";
import useConfirmUpdatePropertySwals from "../hooks/use-confirm-update-property-swals";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackH2 } from "../../../styles/h2/h2.styles";
import { BlackText } from "../../../styles/p/p.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";

const DeleteProduct = () => {
  const { name, $id, $collectionId } = useManageMenuLogic();
  const { confirmDeleteProduct } = useConfirmUpdatePropertySwals();

  return (
    <ParentDiv className="warning">
      <BlackH2 className="no-underline">delete {name}</BlackH2>
      <BlackText>
        to delete this product from your menu, tap the button below.
      </BlackText>
      <BlackText>
        you will have a chance to confirm before the deletion occurs.
      </BlackText>

      <YellowGreenButton
        onClick={() => confirmDeleteProduct(name, $collectionId, $id)}
      >
        delete product
      </YellowGreenButton>
    </ParentDiv>
  );
};

export default DeleteProduct;
