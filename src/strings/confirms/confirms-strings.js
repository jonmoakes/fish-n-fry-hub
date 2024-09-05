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
