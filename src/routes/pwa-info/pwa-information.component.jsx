import PwaTitle from "./pwa-title.component";
import PwaInfo from "../../components/pwa-info/pwa-info.component";
import PwaInstructions from "./pwa-instructions.component";

import { Container } from "../../styles/container/container.styles";

const PwaInformation = () => (
  <Container>
    <PwaTitle />
    <PwaInfo />
    <PwaInstructions />
  </Container>
);

export default PwaInformation;
