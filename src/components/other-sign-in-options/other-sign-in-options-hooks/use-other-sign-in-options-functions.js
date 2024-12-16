import { account } from "../../../utils/appwrite/appwrite-config";
import { OAuthProvider } from "appwrite";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import {
  signInEmailOtpRoute,
  socialSignInFailRoute,
  socialSignInSuccessRoute,
} from "../../../strings/routes/routes-strings";

const useOtherSignInOptionsFunctions = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const goToOtpRoute = () => {
    hamburgerHandlerNavigate(signInEmailOtpRoute);
  };

  const signInWithSocial = (provider) => {
    const providers = {
      google: OAuthProvider.Google,
      facebook: OAuthProvider.Facebook,
    };

    const getProvider = () => providers[provider];

    const getRedirectUrl = (baseRoute) =>
      import.meta.env.MODE === "development"
        ? `http://localhost:8888${baseRoute}`
        : `https://fishnfry-hub.netlify.app${baseRoute}`;

    const successRedirectUrl = getRedirectUrl(socialSignInSuccessRoute);
    const failureRedirectUrl = getRedirectUrl(socialSignInFailRoute);

    const selectedProvider = getProvider();

    if (!selectedProvider) {
      console.error(`Invalid provider: ${provider}`);
      return;
    }

    try {
      account.createOAuth2Session(
        selectedProvider,
        successRedirectUrl,
        failureRedirectUrl
      );
    } catch (error) {
      console.error("Social sign-in failed:", error);
    }
  };

  return { goToOtpRoute, signInWithSocial };
};

export default useOtherSignInOptionsFunctions;
