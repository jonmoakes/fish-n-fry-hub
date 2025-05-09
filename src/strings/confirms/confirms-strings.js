import { customYellow, customLightGreen } from "../../styles/colors";

export const confirmSureMessage = "are you sure?";
export const confirmCancelEditingMessage =
  "are you sure you want to cancel editing this product?";
export const imSureMessage = "i'm sure";
export const confirmSignOutMessage = "are you sure you want to sign out?";
export const yesSignOutMessage = "yes, sign out";
export const confirmSignUpMessage = "are you sure you want to sign up?";
export const confirmIncreaseQuantityMessage =
  "Are you sure you want to increase the quantity?";
export const confirmDecreaseQuantityMessage =
  "Are you sure you want to decrease the quantity?";
export const confirmClearCartItemMessage =
  "are you sure you want to remove this cart item?";

export const confirmUpdateOrderStatusMessage = (orderStatus) => {
  return `<span style="font-size: 20px;">${
    orderStatus === true
      ? `update the order status to be <br/><span style="color: red;">preparing</span>?<br/><br/>you should only need to do this if you made a mistake in marking an order as completed.`
      : `update the order status to be <br/><span style="color: yellow;">completed</span>?`
  }</span>`;
};

export const confirmGoToAllTimeOrdersRouteMessage = `<span style="font-size: 20px;">are you sure you want to view every order ever made?<br/><br/>please note that depending on the amount of orders you have, this may take a while to load so please be patient. :)</span>`;
export const confirmCompleteOrderMessage = "complete your order?";
export const yesPlaceOrderMessage = "yes, place order!";
export const confirmAddItemToCartMessage = "add this item to your cart?";
export const confirmGoToUsersPageMessage = "go to users page?";
export const confirmReorderMessage =
  "do you want to reorder this meal? You will have the chance to review and confirm before purchasing.";
export const confirmCancelRepeatOrderMessage =
  "cancel repeat order and return to your orders table?";
export const sureSendContactFormMessage =
  "are you sure you want to send this message?";
export const areYouSureMessage = "are you sure?";
export const confirmDeleteUserDocument =
  "are you sure you want to delete the user?";
export const confirmUpdateProductPriceMessage = (
  attributeDescription,
  name,
  newValue
) => {
  return `<span style="font-size: 20px;">
      do you want to update the <span style="color: ${customYellow};">${attributeDescription}</span> of the following product:<br/><br/><span style="color: ${customLightGreen};">${name}</span><br/><br/>
      to be <span style="color: ${customYellow};">£${(newValue / 100).toFixed(
    2
  )}</span>?
    </span>`;
};

export const confirmRemoveProductMessage = (name) => {
  return `<span style="font-size: 20px;">
      are you sure you want to completely remove <span style="color: ${customYellow};">${name}</span> from the menu?<br/>the user will not be able to purchase this product any more.
    </span>`;
};

export const confirmChangeCategoryMessage =
  "are you sure you want to change the category? this will reset any data that you have entered so far.";
export const confirmCreateProductMessage =
  "do you want to create this product? It will be added to the menu immediately.";

export const confirmUpdateOptionPriceMessage = (optionName, newOptionPrice) => {
  return `<span style="font-size: 20px;">are you sure you want to update the price of your<br/><span style="color: ${customYellow};">${optionName}</span> option<br/>to be<br/><span style="color: ${customYellow};">£${(
    newOptionPrice / 100
  ).toFixed(2)}</span>?</span>`;
};
export const sureCloseAccountQuestion =
  "are you sure you wish to close your account with us?";
export const sureResetPasswordMessage =
  "are you sure you wish to reset your password?";
export const sureUpdatePasswordMessage =
  "are you sure you wish to update your password?";

export const confirmSendOtpCode = (email) => {
  return `<span style="font-size: 20px;">the one time passcode will be sent to<br/><span style="color: ${customYellow}; text-transform: lowercase">${email}</span><br/>
    is this correct?
      </span>`;
};
export const confirmUpdateEmailMessage = (newEmail) => {
  return `are you sure you wish to update your email to be <span style="text-transform: lowercase;  color: hsl(60, 100%, 50%);">${newEmail}</span>?`;
};
