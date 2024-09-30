export const confirmSureMessage = "are you sure?";
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

export const confirmGoToAllTimeOrdersRouteMessage = `<span style="font-size: 20px;">are you sure you want to view every order ever made?<br/><br/>please note that depending on the amount of orders you have, this may take a while to load so please be patient. ;)</span>`;
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
