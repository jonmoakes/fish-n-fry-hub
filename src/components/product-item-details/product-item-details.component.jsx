import Balancer from "react-wrap-balancer";

import useProductItemFunctions from "./product-item-hooks/use-product-item-functions";

import { ChooseOptionsButton } from "../../styles/buttons/buttons.styles";
import { ProductItemDiv } from "../../styles/div/div.styles";
import { Description, Name, Price } from "../../styles/span/span.styles";

const ProductItemDetails = ({ id, name, description, price }) => {
  const { chooseAndNavigate } = useProductItemFunctions();

  return (
    <ProductItemDiv key={id}>
      <Name>{name}</Name>
      {description ? (
        <Description>
          <Balancer>{description}</Balancer>
        </Description>
      ) : null}
      <Price>£{price.toFixed(2)}</Price>
      <ChooseOptionsButton onClick={() => chooseAndNavigate(name, price)}>
        Select & Choose Options
      </ChooseOptionsButton>
    </ProductItemDiv>
  );
};

export default ProductItemDetails;
