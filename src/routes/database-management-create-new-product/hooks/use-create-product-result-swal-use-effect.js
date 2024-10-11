import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";

import useFireSwal from "../../../hooks/use-fire-swal";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { databaseManagementManageMenuRoute } from "../../../strings/routes/routes-strings";
import { errorReceivedMessage } from "../../../strings/errors/errors-strings";
import {
  resetCreateProductError,
  resetCreateProductResult,
  resetProductToAdd,
} from "../../../store/database-management/database-management.slice";
import { productCreatedMessage } from "../../../strings/successes/sucesses-strings";

const useCreateProductResultSwalUseEffect = () => {
  const { createProductResult, createProductError } =
    useGetDatabaseManagementSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  const { fireSwal } = useFireSwal();
  useEffect(() => {
    if (!createProductResult && !createProductError) return;

    if (createProductResult === "fulfilled") {
      fireSwal(
        "success",
        productCreatedMessage,
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetCreateProductResult());
          dispatch(resetProductToAdd());
          hamburgerHandlerNavigate(databaseManagementManageMenuRoute);
        }
      });
    } else {
      fireSwal(
        "error",
        errorReceivedMessage(
          "there was an error creating the product.",
          createProductError
        ),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetCreateProductResult());
          dispatch(resetCreateProductError());
        }
      });
    }
  }, [
    createProductResult,
    createProductError,
    fireSwal,
    dispatch,
    hamburgerHandlerNavigate,
  ]);
};

export default useCreateProductResultSwalUseEffect;
