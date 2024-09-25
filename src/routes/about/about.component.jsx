import AboutIntro from "./about-intro.component";
import CheckoutProcess from "./customer/checkout-process.component";
import CustomerOrdersInfo from "./customer/customer-orders-info.component";
import EmailInfo from "./customer/email-info.component";
import MenuInfo from "./customer/menu-info.component";
import Outro from "./customer/outro.component";
import SignInProcess from "./customer/sign-in-process.component";
import OwnerTable from "./owner/owner-table.component";

import { Container } from "../../styles/container/container.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import UserTableInfo from "./owner/user-table-info.component";
import IncomeInfo from "./owner/income-info.component";
import DbManagementInfo from "./owner/db-managment-info.component";
import AboutOutro from "./about-outro.component";

const About = () => (
  <Container>
    <AboutIntro />
    <ParentDiv>
      <H2>customer usage:</H2>
    </ParentDiv>
    <SignInProcess />
    <MenuInfo />
    <CheckoutProcess />
    <EmailInfo />
    <CustomerOrdersInfo />
    <Outro />
    <BlackHr />
    <ParentDiv>
      <H2>owner usage:</H2>
    </ParentDiv>
    <OwnerTable />
    <UserTableInfo />
    <IncomeInfo />
    <DbManagementInfo />
    <AboutOutro />
  </Container>
);

export default About;
