import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import {
  resetDatabaseManagementState,
  resetDeleteDocumentError,
  resetDeleteDocumentResult,
} from "../../../store/database-management/database-management.slice";
import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { errorReceivedMessage } from "../../../strings/errors/errors-strings";
import {
  databaseManagementManageMenuRoute,
  databaseManagementRoute,
} from "../../../strings/routes/routes-strings";
import useManageMenuLogic from "./use-manage-menu-logic";

const useDeleteProductResultSwal = () => {
  const { deleteDocumentResult, deleteDocumentError } =
    useGetDatabaseManagementSelectors();
  const { name } = useManageMenuLogic();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!deleteDocumentResult && !deleteDocumentError) return;

    if (deleteDocumentResult === "fulfilled") {
      fireSwal(
        "success",
        `${name} was successfully deleted from the menu!`,
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetDatabaseManagementState());

          hamburgerHandlerNavigate(databaseManagementRoute);
        }
      });
    } else {
      fireSwal(
        "error",
        errorReceivedMessage(
          "there was an error deleting the product.",
          deleteDocumentError
        ),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetDeleteDocumentResult());
          dispatch(resetDeleteDocumentError());
        }
      });
    }
  }, [
    fireSwal,
    deleteDocumentResult,
    deleteDocumentError,
    hamburgerHandlerNavigate,
    dispatch,
    name,
  ]);
};

export default useDeleteProductResultSwal;
