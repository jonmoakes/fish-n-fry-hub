import Balancer from "react-wrap-balancer";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { contactRoute, signUpRoute } from "../../strings/routes/routes-strings";

const AboutOutro = () => (
  <ParentDiv>
    <H2 className="underline">summary</H2>
    <Text>
      <Balancer>
        we hope you agree that these features will make the running of your
        business smoother and more efficient!
      </Balancer>
    </Text>
    <Text>
      <Balancer>
        if you wish to find out more, please{" "}
        <StyledLink to={contactRoute} className="yellow">
          contact me
        </StyledLink>{" "}
        for more details and a full demo!
      </Balancer>
    </Text>
    <Text>
      <Balancer>
        if you want to see what the user experience is like, feel free to create
        an account as a test user by{" "}
        <StyledLink to={signUpRoute} className="yellow">
          signing up
        </StyledLink>
        .
      </Balancer>
    </Text>
    <Text>
      <Balancer>
        this will allow you to fully explore the app from a customers
        perspective, even creating virtual orders using our test debit card.
      </Balancer>
    </Text>
    <Text>
      <Balancer>
        I welcome any feedback that you may have, so please don't hesitate to{" "}
        <StyledLink to={contactRoute} className="yellow">
          contact me
        </StyledLink>{" "}
        with any questions or feedback!
      </Balancer>
    </Text>
  </ParentDiv>
);

export default AboutOutro;
