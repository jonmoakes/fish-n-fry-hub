import useOtherSignInOptionsFunctions from "./other-sign-in-options-hooks/use-other-sign-in-options-functions";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackText } from "../../styles/p/p.styles";
import OtherSignInOptionsAccordion from "./other-sign-in-options-accordion.component";
import TroubleWithAuthMethodsAccordion from "./trouble-with-auth-methods-accordion.component";

const OtherSignInOptions = () => {
  const { signInWithSocial, goToOtpRoute } = useOtherSignInOptionsFunctions();

  return (
    <>
      <BlackText>or sign in with our other options:</BlackText>

      <OtherSignInOptionsAccordion />

      <BlackHr />

      <YellowGreenButton
        className="google"
        type="button"
        onClick={() => signInWithSocial("google")}
      >
        sign in with google
      </YellowGreenButton>

      <BlackHr />

      <YellowGreenButton
        className="facebook"
        type="button"
        onClick={() => signInWithSocial("facebook")}
      >
        sign in with Facebook
      </YellowGreenButton>

      <BlackHr />

      <YellowGreenButton className="otp" type="button" onClick={goToOtpRoute}>
        email a passcode
      </YellowGreenButton>

      <BlackHr />

      <TroubleWithAuthMethodsAccordion />

      <BlackHr />
    </>
  );
};

export default OtherSignInOptions;
