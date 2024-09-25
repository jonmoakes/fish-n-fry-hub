import useCheckForAndClearFormDetails from "./account-hooks/use-check-for-and-clear-form-details";

import Intro from "./intro.component";
import AccountButtonLinks from "./account-button-links.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

const Account = () => {
  useCheckForAndClearFormDetails();

  return (
    <Container>
      <ParentDiv>
        <Title>your account</Title>
      </ParentDiv>
      <Intro />
      <AccountButtonLinks />
    </Container>
  );
};

export default Account;
