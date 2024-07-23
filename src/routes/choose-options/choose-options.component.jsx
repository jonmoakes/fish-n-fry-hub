import useChooseOptionsVariables from "./choose-options-hooks/use-choose-options-variables";

import RequiredInfoText from "./required-info-text.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv, ProductItemDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { Name, Price } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const ChooseOptions = () => {
  const { name, price } = useChooseOptionsVariables();

  return (
    <Container>
      <ParentDiv>
        <Title>choose options</Title>
      </ParentDiv>
      <ParentDiv>
        <RequiredInfoText />
        <Text>you have selected:</Text>
      </ParentDiv>

      <ProductItemDiv>
        <Name>{name}</Name>
        <BlackHr />
        <Text>base price:</Text>
        <Price>£{price.toFixed(2)}</Price>

        {/* <ProductCombinedOptions />
          <ProductTotalInfo /> */}
        {/* {isOnline && <AddToOrderButton />}
          {!isOnline && <NetworkError />} */}
      </ProductItemDiv>
    </Container>
  );
};

export default ChooseOptions;
