import { Navigate } from "react-router-dom";

import useChooseOptionsVariables from "./choose-options-hooks/use-choose-options-variables";

import Loader from "../../components/loader/loader.component";

import { menuRoute } from "../../strings/routes/routes-strings";

const ChooseOptionsRedirectAndLoader = () => {
  const { selectedItem, optionsPricesIsLoading, cartItemsIsLoading } =
    useChooseOptionsVariables();
  return (
    <>
      {!Object.keys(selectedItem).length && <Navigate replace to={menuRoute} />}
      {optionsPricesIsLoading || cartItemsIsLoading ? <Loader /> : null}
    </>
  );
};

export default ChooseOptionsRedirectAndLoader;
