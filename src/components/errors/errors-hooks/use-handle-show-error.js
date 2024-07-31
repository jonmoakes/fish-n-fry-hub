import useGetChooseOptionsSelectors from "../../../hooks/selectors/use-get-choose-options-selectors";
import useGetMenuSelectors from "../../../hooks/selectors/use-get-menu-selectors";

const useHandleShowError = () => {
  const { menuError } = useGetMenuSelectors();
  const {
    gratedCheesePriceError,
    donerMeatPriceError,
    saucesDocumentsError,
    canDocumentsError,
  } = useGetChooseOptionsSelectors();

  const showErrorHeading = () => {
    if (menuError) return "failed to fetch menu data.";
    if (gratedCheesePriceError || donerMeatPriceError)
      return "failed to fetch options prices.";
    if (saucesDocumentsError) return "failed to fetch our list of sauces.";
    if (canDocumentsError)
      return "failed to fetch our list of drinks to go with your order.";
    // add more if needed with if statement for each
  };

  const errorToDisplay = () => {
    const errors = [
      menuError,
      gratedCheesePriceError,
      donerMeatPriceError,
      saucesDocumentsError,
      canDocumentsError,
      // add more separated by comma
    ];

    return errors.find((error) => error !== null);
  };

  return { showErrorHeading, errorToDisplay };
};

export default useHandleShowError;
