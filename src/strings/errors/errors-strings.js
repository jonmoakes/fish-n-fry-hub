import { customYellow, customTomato } from "../../styles/colors";

export const noNetworkMessage =
  "you don't seem to be connected to the internet. Please check your connection";
export const errorSigningUpMessage = (error) => {
  return `<span style="font-size:20px";>sorry, there was an error creating your account.<br/><br/>The error received was:<br/>'<span style="color:${customYellow}";>${error}</span>'</span>`;
};
export const missingFieldsMessage = `<span style="font-size:20px";>please make sure that you have completed all fields that are marked with a '<span style="color:${customTomato}";>*</span>'.</span>`;
export const invalidEmailErrorMessage =
  "you have entered an invalid email address. please try again.";
export const passwordsDontMatchMessage =
  "your passwords don't match. Please try again.";
export const passwordCantContainSpaceMessage =
  "passwords can't contain a space ( ' ' ). please try again.";
export const appwriteNoUserError =
  "User (role: guests) missing scope (account)";
export const passwordLengthErrorMessage =
  "your password must be at least 8 characters long";
export const errorSigningOutMessage = (error) => {
  return `<span style="font-size:20px";>sorry, there was an error signing out.<br/><br/>The error received was:<br/>'<span style="color:${customYellow}";>${error}</span>'</span>`;
};
export const errorSigningInMessage = (error) => {
  return `<span style="font-size:20px";>sorry, there was an error trying to sign you in.<br/><br/>The error received was:<br/>'<span style="color:${customYellow}";>${error}</span>'</span>`;
};
export const appwriteCredentialsError =
  "Invalid credentials. Please check the email and password.";
export const appwritePasswordLengthError =
  "Invalid `password` param: Password must be between 8 and 256 characters long.";
export const errorAddingCartItemMessage = (error) => {
  return `<span style="font-size:20px";>sorry, there was an error adding the cart item.<br/><br/>The error received was:<br/>'<span style="color:${customYellow}";>${error}</span>'<br/><br/><span style="font-size:20px";>please try again or contact us if the error persists.</span>`;
};
export const formNotCompleteWarning =
  "the pay button will show when the form is complete";
