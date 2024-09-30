import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import {
  resetDataToUpdateDocument,
  resetDeleteDocumentError,
  resetDeleteDocumentResult,
} from "../../../store/database-management/database-management.slice";
import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { errorDeletingUserMessage } from "../../../strings/errors/errors-strings";
import { databaseManagementRoute } from "../../../strings/routes/routes-strings";

const useDeleteUserResultSwal = () => {
  const { deleteDocumentResult, deleteDocumentError } =
    useGetDatabaseManagementSelectors();

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { fireSwal } = useFireSwal();

  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname;

  useEffect(() => {
    if (!deleteDocumentResult && !deleteDocumentError) return;

    if (deleteDocumentResult === "fulfilled") {
      fireSwal("success", "user deleted!", "", 0, "", false, "", false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatch(resetDeleteDocumentResult());
            dispatch(resetDataToUpdateDocument());
            hamburgerHandlerNavigate(databaseManagementRoute);
          }
        }
      );
    } else {
      fireSwal(
        "error",
        errorDeletingUserMessage(deleteDocumentError),
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
    path,
    dispatch,
  ]);
};

export default useDeleteUserResultSwal;
