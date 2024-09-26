import Intro from "./intro.component";
import Video from "../../components/video/video.component";
import SignInUpLinks from "./sign-in-up-links.component";
import OpeningHours from "./opening-hours.component";

import { Container } from "../../styles/container/container.styles";

const Home = () => (
  <Container>
    <Intro />
    <Video />
    <SignInUpLinks />
    <OpeningHours />
  </Container>
);

export default Home;
