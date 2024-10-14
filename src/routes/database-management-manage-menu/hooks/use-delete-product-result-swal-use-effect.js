import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  resetDatabaseManagementState,
  resetDeleteDocumentError,
  resetDeleteDocumentResult,
} from "../../../store/database-management/database-management.slice";
import useManageMenuLogic from "./use-manage-menu-logic";
import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { errorReceivedMessage } from "../../../strings/errors/errors-strings";
import { databaseManagementManageMenuRoute } from "../../../strings/routes/routes-strings";
import { fetchMenuDocumentsAsync } from "../../../store/menu/menu-thunks";

const useDeleteProductResultSwalUseEffect = () => {
  const { deleteDocumentResult, deleteDocumentError, name } =
    useManageMenuLogic();

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
          dispatch(fetchMenuDocumentsAsync());
          hamburgerHandlerNavigate(databaseManagementManageMenuRoute);
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

export default useDeleteProductResultSwalUseEffect;
