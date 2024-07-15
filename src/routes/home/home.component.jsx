import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { LowercasedSpan } from "../../styles/span/span.styles";

const Home = () => (
  <Container>
    <ParentDiv>
      <Title>
        fish '<LowercasedSpan>n</LowercasedSpan>' fry hub
      </Title>
    </ParentDiv>
  </Container>
);

export default Home;
