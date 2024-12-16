import { customYellow, customTomato } from "../../styles/colors";

export const noNetworkMessage =
  "you don't seem to be connected to the internet. Please check your connection";

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

export const appwriteCredentialsError =
  "Invalid credentials. Please check the email and password.";
export const appwritePasswordLengthError =
  "Invalid `password` param: Password must be between 8 and 256 characters long.";

export const formNotCompleteWarning =
  "the pay button will show when the form is complete";

export const errorReceivedMessage = (errorInfo, error) => {
  return `<span style="font-size:20px";>${errorInfo}<br/><br/>The error received was:<br/>'<span style="color:${customYellow}";>${error}</span>'<br/><br/><span style="font-size:20px";>please try again or contact us if the error persists.</span>`;
};

export const errorSendingEmailMessage = (error) => {
  return `<span style="font-size:20px";>sorry, the email failed to send. If you still require this email, please contact us.<br/><br/>The error received was:<br/>'<span style="color:${customYellow}";>${error}</span>'</span>`;
};

export const errorUploadingOrderToDbMessage = `<span style="font-size:20px";>sorry, there has been an error. your payment was taken but there was an error uploading the order to the database.<br/><br/>please tap the 'send email' button below which will email the app owner with the details of your order.<br/><br/>They will then respond asap to confirm your order details. We apologise for the inconvenience!</span>`;

export const errorEmailOrderToAppOwnerMessage = (message) => {
  return `<span style="font-size:20px";>well this is embarassing..The email failed to send. ${message} Please DO NOT try to place the order again as you would be charged twice. We sincerely apologise for the inconvenience.</span>`;
};

export const errorDeletingCartItemsFromDbMessage = `<span style="font-size:20px";>Please note, we had an error when trying to clear your cart items.<br/>This does not affect your order that you have just placed, but please go to your account page and tap the clear cart items button to clear them manually.<br/>We apologise for the inconvenience!</span>`;
export const errorSendingContactFormMessage = (error) => {
  return `<span style="font-size:20px";>sorry, there was an error sending your message.<br/>Please Try Again.<br/><br/>The error received was:<br/>'<span style="color:${customYellow}";>${error}</span>'</span>`;
};
export const cantHaveUppercaseCharactersErrorMessage = `<span style="font-size: 20px;">  the input can't have uppercase characters.</span>`;

export const dbManageAddOrdercantHaveUppercaseCharactersErrorMessage = `<span style="font-size: 20px;">the only input that is allowed to have uppercase characters is the 'order details' section.<br/><br/>please make sure that all other inputs are lowercase.</span>`;
export const cantIncludeCommaMessage = "names can't include a comma";
export const documentLengthErrorMessage =
  "the id field should be 20 characters in length";
export const phoneNumberLengthErrorMessage =
  "your phone number must be 11 digits long";
export const whiteSpaceErrorMessage = `<span style="font-size: 20px;">one or some of your entered values starts or ends with a space ( ' ' ). please make sure there is no white space at the beginning or end of the data you are trying to input.</span>`;
export const errorDeletingUserMessage = (error) => {
  return `<span style="font-size:20px";>sorry, there was an error deleting the user.<br/>Please Try Again or contact us if the error persists.<br/><br/>The error received was:<br/>'<span style="color:${customYellow}";>${error}</span>'</span>`;
};

export const hasSizeErrorMessage = `<span style="font-size:20px";>as you have checked the<br/>'<span style="color:${customYellow}";>has size option?</span>'<br/>box, please enter<br/><span style="color:${customYellow}";>at least once size price value</span>.<br/><br/>or uncheck the 'has size option' box if the product doesn't have size options.</span>`;

export const hasSaucesErrorMessage = `<span style="font-size:20px";>as you have checked the<br/>'<span style="color:${customYellow}";>has sauces option?</span>'<br/>box, please make sure that the<br/><span style="color:${customYellow}";>number of sauces available</span><br/>box has a value of<br/><span style="color:${customYellow}";>1 or 3</span>.<br/><br/>or uncheck the 'has sauces option' box if the product doesn't have sauce options.</span>`;

export const hasCondimentsErrorMessage = `<span style="font-size:20px";>as you have checked the<br/>'<span style="color:${customYellow}";>has condiments option?</span>'<br/>box, please make sure that the<br/>'<span style="color:${customYellow}";>number of condiments available</span>'<br/>box has a value of<br/><span style="color:${customYellow}";>1 or 2</span>.<br/><br/>or uncheck the 'has condiments option' box if the product doesn't have condiment options.</span>`;

export const hasMeatsErrorMessage = `<span style="font-size:20px";>as you have checked the<br/>'<span style="color:${customYellow}";>has meats option?</span>'<br/>box, please make sure that the<br/>'<span style="color:${customYellow}";>number of meats available</span>'<br/>box has a value of<br/><span style="color:${customYellow}";>2</span>.<br/><br/>or uncheck the 'has meats option' box if the product doesn't have meat options.</span>`;
export const dbAccessPasswordError =
  "your password is incorrect. please try again.";
export const errorSendingAccountClosureRequest =
  "sorry, there was an error sending your request.";
export const appwriteUserNotFoundMessage =
  "User with the requested ID could not be found.";
export const emailAddressNotInDatabase =
  "the email address you entered does not match any email in our database.";
export const passwordErrorMessage = "password error";
export const passwordErrorInstructions =
  "please check your password and try again";
export const emailsDontMatchMessage = `<span style="font-size: 20px;">the emails dont match.<br/>please try again.</span>`;
