import useGetCartItemsSelectors from "../../../hooks/selectors/use-get-cart-items-selectors";
import useGetChooseOptionsSelectors from "../../../hooks/selectors/use-get-choose-options-selectors";
import useGetMenuSelectors from "../../../hooks/selectors/use-get-menu-selectors";
import useGetHandlePaymentSelectors from "../../../hooks/selectors/use-get-handle-payment-selectors";
import useGetOrdersOwnerSelectors from "../../../hooks/selectors/use-get-orders-owner-selectors";

const useHandleShowError = () => {
  const { menuError } = useGetMenuSelectors();
  const { fetchCartItemsError } = useGetCartItemsSelectors();
  const {
    gratedCheesePriceError,
    donerMeatPriceError,
    saucesDocumentsError,
    canDocumentsError,
    meatsDocumentsError,
    piesDocumentsError,
    condimentsDocumentsError,
  } = useGetChooseOptionsSelectors();
  const { handlePaymentError } = useGetHandlePaymentSelectors();
  const { ordersOwnerError } = useGetOrdersOwnerSelectors();

  const showErrorHeading = () => {
    if (menuError) return "failed to fetch menu data.";
    if (fetchCartItemsError)
      return "failed to fetch your cart items.  Note: This check is necessary to determine if you have any items in your cart.";
    if (gratedCheesePriceError || donerMeatPriceError)
      return "failed to fetch options prices.";
    if (saucesDocumentsError) return "failed to fetch our list of sauces.";
    if (meatsDocumentsError) return "failed to fetch our list of meats.";
    if (piesDocumentsError) return "failed to fetch our list of pies.";
    if (canDocumentsError)
      return "failed to fetch our list of drinks to go with your order.";
    if (condimentsDocumentsError)
      return "failed to fetch our list of  condiments";
    if (handlePaymentError) return "failed to contact payment processor.";
    if (ordersOwnerError) return "failed to fetch orders.";
  };

  const errorToDisplay = () => {
    const errors = [
      menuError,
      fetchCartItemsError,
      gratedCheesePriceError,
      donerMeatPriceError,
      saucesDocumentsError,
      meatsDocumentsError,
      canDocumentsError,
      piesDocumentsError,
      condimentsDocumentsError,
      handlePaymentError,
      ordersOwnerError,
    ];

    return errors.find((error) => error !== null);
  };

  return { showErrorHeading, errorToDisplay, menuError, fetchCartItemsError };
};

export default useHandleShowError;
