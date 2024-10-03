import { useDispatch } from "react-redux";
import useManageMenuLogic from "./hooks/use-manage-menu-logic";
import { resetProductToEdit } from "../../store/database-management/database-management.slice";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { MinimalButton } from "../../styles/buttons/buttons.styles";
import { YellowShadowSpan } from "../../styles/span/span.styles";

const ProductToUpdateName = () => {
  const { name } = useManageMenuLogic();
  const dispatch = useDispatch();

  return (
    <ParentDiv>
      <Text>
        you have chosen - <YellowShadowSpan>{name}</YellowShadowSpan>
      </Text>

      <MinimalButton onClick={() => dispatch(resetProductToEdit())}>
        cancel editing
      </MinimalButton>
      <Text>
        these are the following details that you can edit for this product.
      </Text>
    </ParentDiv>
  );
};

export default ProductToUpdateName;
