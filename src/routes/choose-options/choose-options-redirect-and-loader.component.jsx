import { Navigate } from "react-router-dom";

import useChooseOptionsVariables from "./choose-options-hooks/use-choose-options-variables";
import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { menuRoute } from "../../strings/routes/routes-strings";

const ChooseOptionsRedirectAndLoader = () => {
  const { selectedItem, optionsPricesIsLoading, cartItemsIsLoading } =
    useChooseOptionsVariables();
  return (
    <>
      {!Object.keys(selectedItem).length && <Navigate replace to={menuRoute} />}
      {optionsPricesIsLoading || cartItemsIsLoading ? (
        <SkeletonBox
          loadingText={
            optionsPricesIsLoading
              ? "Fetching Option Prices..."
              : "Adding To Cart..."
          }
        />
      ) : null}
    </>
  );
};

export default ChooseOptionsRedirectAndLoader;
