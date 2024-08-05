import useGetCartItemsSelectors from "../../../hooks/selectors/use-get-cart-items-selectors";
import useGetChooseOptionsSelectors from "../../../hooks/selectors/use-get-choose-options-selectors";
import useGetMenuSelectors from "../../../hooks/selectors/use-get-menu-selectors";

const useHandleShowError = () => {
  const { menuError } = useGetMenuSelectors();
  const { cartItemsError } = useGetCartItemsSelectors();
  const {
    gratedCheesePriceError,
    donerMeatPriceError,
    saucesDocumentsError,
    canDocumentsError,
    meatsDocumentsError,
    piesDocumentsError,
    condimentsDocumentsError,
  } = useGetChooseOptionsSelectors();

  const showErrorHeading = () => {
    if (menuError) return "failed to fetch menu data.";
    if (cartItemsError)
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
    // add more if needed with if statement for each
  };

  const errorToDisplay = () => {
    const errors = [
      menuError,
      cartItemsError,
      gratedCheesePriceError,
      donerMeatPriceError,
      saucesDocumentsError,
      meatsDocumentsError,
      canDocumentsError,
      piesDocumentsError,
      condimentsDocumentsError,
      // add more separated by comma
    ];

    return errors.find((error) => error !== null);
  };

  return { showErrorHeading, errorToDisplay, menuError, cartItemsError };
};

export default useHandleShowError;
