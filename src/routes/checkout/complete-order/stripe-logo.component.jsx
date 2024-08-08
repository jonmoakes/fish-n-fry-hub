import { StripeLogoDiv } from "../../../styles/div/div.styles";
import { ItalicStripeText } from "../../../styles/p/p.styles";
import { StripeLogo } from "../../../styles/svg/svg.styles";

const AccountStripeLogo = () => (
  <StripeLogoDiv>
    <ItalicStripeText>Checkout Powered By:</ItalicStripeText>
    <StripeLogo />
  </StripeLogoDiv>
);

export default AccountStripeLogo;
