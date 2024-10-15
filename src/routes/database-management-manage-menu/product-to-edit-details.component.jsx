import useManageMenuLogic from "./hooks/use-manage-menu-logic";
import useConfirmUpdatePropertySwals from "./hooks/use-confirm-update-property-swals";

import UpdatePrice from "./update-price.component";

import { ParentDiv, WarningInnerDiv } from "../../styles/div/div.styles";
import { BlackText, Text } from "../../styles/p/p.styles";
import { YellowShadowSpan } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackH2 } from "../../styles/h2/h2.styles";
import Balancer from "react-wrap-balancer";

const ProductToEditDetails = () => {
  const {
    name,
    price,
    sizeOptionMediumPrice,
    sizeOptionLargePrice,
    sizeOptionDoublePrice,
    sizeOptionTriplePrice,
    $collectionId,
    $id,
  } = useManageMenuLogic();
  const { confirmCancelEditing, confirmDeleteProduct } =
    useConfirmUpdatePropertySwals();

  return (
    <>
      <ParentDiv className="bounce">
        <Text>you have chosen the following product:</Text>
        <Text>
          <YellowShadowSpan>{name}</YellowShadowSpan>
        </Text>
        <BlackHr />
        <YellowGreenButton onClick={confirmCancelEditing}>
          cancel editing
        </YellowGreenButton>

        <Text>
          <Balancer>
            these are the details that you can edit for this product{" "}
          </Balancer>
        </Text>
        <Text>&darr; &darr;</Text>
      </ParentDiv>

      <UpdatePrice
        propertyValue={price}
        title="Edit base price"
        attributeDescription="base price"
        attributeKey="price"
      />

      <UpdatePrice
        propertyValue={sizeOptionMediumPrice}
        title="Edit medium price"
        attributeDescription="medium price"
        attributeKey="sizeOptionMediumPrice"
      />

      <UpdatePrice
        propertyValue={sizeOptionLargePrice}
        title="Edit large price"
        attributeDescription="large price"
        attributeKey="sizeOptionLargePrice"
      />

      <UpdatePrice
        propertyValue={sizeOptionDoublePrice}
        title="Edit double price"
        attributeDescription="double price"
        attributeKey="sizeOptionDoublePrice"
      />

      <UpdatePrice
        propertyValue={sizeOptionTriplePrice}
        title="Edit triple price"
        attributeDescription="triple price"
        attributeKey="sizeOptionTriplePrice"
      />

      <ParentDiv className="warning left">
        <WarningInnerDiv>
          <BlackH2 className="no-underline">
            <Balancer>delete {name}?</Balancer>
          </BlackH2>
          <BlackHr />
          <BlackText>
            to delete this product from your menu, tap the button below.
          </BlackText>
          <BlackText>
            you will have a chance to confirm before the deletion occurs.
          </BlackText>
        </WarningInnerDiv>
        <YellowGreenButton
          onClick={() => confirmDeleteProduct(name, $collectionId, $id)}
        >
          delete product
        </YellowGreenButton>
      </ParentDiv>
    </>
  );
};
export default ProductToEditDetails;
