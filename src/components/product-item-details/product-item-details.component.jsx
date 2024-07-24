import Balancer from "react-wrap-balancer";

import useProductItemFunctions from "./product-item-hooks/use-product-item-functions";

import { ChooseOptionsButton } from "../../styles/buttons/buttons.styles";
import { ProductItemDiv } from "../../styles/div/div.styles";
import { Description, Name, Price } from "../../styles/span/span.styles";

const ProductItemDetails = ({ item }) => {
  const { chooseAndNavigate } = useProductItemFunctions();

  const { name, description, price } = item ?? {};

  return (
    <>
      <ProductItemDiv>
        <Name>{name}</Name>
        {description ? (
          <Description>
            <Balancer>{description}</Balancer>
          </Description>
        ) : null}
        <Price>£{(price / 100).toFixed(2)}</Price>
        <ChooseOptionsButton onClick={() => chooseAndNavigate(item)}>
          Select & Choose Options
        </ChooseOptionsButton>
      </ProductItemDiv>
    </>
  );
};

export default ProductItemDetails;
