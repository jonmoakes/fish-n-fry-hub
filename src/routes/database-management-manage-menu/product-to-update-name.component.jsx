import useManageMenuLogic from "./hooks/use-manage-menu-logic";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { YellowShadowSpan } from "../../styles/span/span.styles";
import useConfirmUpdatePropertySwals from "./hooks/use-confirm-update-property-swals";
import { BlackHr } from "../../styles/hr/hr.styles";

const ProductToUpdateName = () => {
  const { name } = useManageMenuLogic();
  const { confirmCancelEditing } = useConfirmUpdatePropertySwals();

  return (
    <ParentDiv>
      <Text>you have chosen the following product:</Text>
      <Text>
        <YellowShadowSpan>{name}</YellowShadowSpan>
      </Text>
      <BlackHr />
      <YellowGreenButton onClick={confirmCancelEditing}>
        cancel editing
      </YellowGreenButton>

      <Text>
        these are the following details that you can edit for this product.
      </Text>
    </ParentDiv>
  );
};

export default ProductToUpdateName;
