import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import {
  resetUpdateAttributeError,
  resetUpdateAttributeResult,
} from "../../../store/database-management/database-management.slice";
import { useDispatch } from "react-redux";
import { errorReceivedMessage } from "../../../strings/errors/errors-strings";

const useUpdateAttributeResultUseEffect = () => {
  const { updateAttributeResult, updateAttributeError } =
    useGetDatabaseManagementSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!updateAttributeResult && !updateAttributeError) return;

    if (updateAttributeResult === "fulfilled") {
      fireSwal("success", "product updated!", "", 0, "", false, "", false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            dispatch(resetUpdateAttributeResult());
          }
        }
      );
    } else {
      fireSwal(
        "error",
        errorReceivedMessage("error updating product", updateAttributeError),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetUpdateAttributeError());
          dispatch(resetUpdateAttributeResult());
        }
      });
    }
  }, [updateAttributeResult, updateAttributeError, fireSwal, dispatch]);
};

export default useUpdateAttributeResultUseEffect;
