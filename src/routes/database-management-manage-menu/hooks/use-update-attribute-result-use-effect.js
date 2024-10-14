import { useEffect } from "react";

import useManageMenuLogic from "./use-manage-menu-logic";

import useFireSwal from "../../../hooks/use-fire-swal";
import {
  resetUpdateAttributeError,
  resetUpdateAttributeResult,
} from "../../../store/database-management/database-management.slice";
import { useDispatch } from "react-redux";
import { errorReceivedMessage } from "../../../strings/errors/errors-strings";
import { priceUpdatedMessage } from "../../../strings/successes/sucesses-strings";

const useUpdateAttributeResultUseEffect = () => {
  const { updateAttributeResult, updateAttributeError } = useManageMenuLogic();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!updateAttributeResult && !updateAttributeError) return;

    if (updateAttributeResult === "fulfilled") {
      fireSwal(
        "success",
        priceUpdatedMessage,
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetUpdateAttributeResult());
        }
      });
    } else {
      fireSwal(
        "error",
        errorReceivedMessage("error updating product.", updateAttributeError),
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
