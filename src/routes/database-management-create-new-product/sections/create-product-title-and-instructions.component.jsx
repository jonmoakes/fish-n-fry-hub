import CreateProductInstructions from "./create-product-instructions.component";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Title } from "../../../styles/h1/h1.styles";

const CreateProductTitleAndInstructions = () => (
  <ParentDiv>
    <Title>create a product</Title>
    <CreateProductInstructions />
  </ParentDiv>
);

export default CreateProductTitleAndInstructions;
