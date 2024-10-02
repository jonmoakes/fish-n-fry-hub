import Balancer from "react-wrap-balancer";

import useProductItemFunctions from "./product-item-hooks/use-product-item-functions";

import { SelectProductButton } from "../../styles/buttons/buttons.styles";
import { ProductItemDiv } from "../../styles/div/div.styles";
import { Description, Name, Price } from "../../styles/span/span.styles";

const ProductItemDetails = ({ item }) => {
  const { chooseAndNavigate } = useProductItemFunctions();

  const { name, description, price } = item ?? {};

  return (
    <>
      <ProductItemDiv>
        <Name>
          <Balancer>{name}</Balancer>
        </Name>
        {description ? (
          <Description>
            <Balancer>{description}</Balancer>
          </Description>
        ) : null}
        <Price>£{(price / 100).toFixed(2)}</Price>
        <SelectProductButton onClick={() => chooseAndNavigate(item)}>
          Select & Choose Options
        </SelectProductButton>
      </ProductItemDiv>
    </>
  );
};

export default ProductItemDetails;
