import { Navigate } from "react-router-dom";

import useGetDatabaseManagementSelectors from "../../hooks/selectors/use-get-database-management-selectors";

import Loader from "../../components/loader/loader.component";

import { uploadOrderDeleteCartItemsRoute } from "../../strings/routes/routes-strings";

const UploadOrderRedirectAndLoader = () => {
  const { addOrderResult, databaseManagementIsLoading } =
    useGetDatabaseManagementSelectors();

  return (
    <>
      {addOrderResult === "fulfilled" && (
        <Navigate replace to={uploadOrderDeleteCartItemsRoute} />
      )}
      {databaseManagementIsLoading ? <Loader /> : null}
    </>
  );
};

export default UploadOrderRedirectAndLoader;
