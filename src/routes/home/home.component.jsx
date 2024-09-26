import Intro from "./intro.component";
import ProcessVideo from "../../components/process-video/process-video.component";
import SignInUpLinks from "./sign-in-up-links.component";
import OpeningHours from "./opening-hours.component";

import { Container } from "../../styles/container/container.styles";

const Home = () => (
  <Container>
    <Intro />
    <ProcessVideo />
    <SignInUpLinks />
    <OpeningHours />
  </Container>
);

export default Home;
