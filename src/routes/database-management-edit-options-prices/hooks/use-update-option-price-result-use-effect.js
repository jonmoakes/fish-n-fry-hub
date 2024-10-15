import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useEditOptionsPricesLogic from "./use-edit-options-prices-logic";
import {
  resetUpdateOptionPriceError,
  resetUpdateOptionPriceResult,
} from "../../../store/database-management/database-management.slice";

import { errorReceivedMessage } from "../../../strings/errors/errors-strings";
import { fetchOptionsPricesAsync } from "../../../store/database-management/database-management.thunks";

const useUpdateOptionPriceResultUseEffect = (resetInputs) => {
  const { updateOptionPriceResult, updateOptionPriceError } =
    useEditOptionsPricesLogic();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!updateOptionPriceResult && !updateOptionPriceError) return;

    if (updateOptionPriceResult === "fulfilled") {
      fireSwal("success", "price updated!", "", 0, "", false, "", false).then(
        (isConfirmed) => {
          if (isConfirmed) {
            resetInputs();
            dispatch(resetUpdateOptionPriceResult());
            dispatch(fetchOptionsPricesAsync());
          }
        }
      );
    } else if (updateOptionPriceResult === "rejected") {
      fireSwal(
        "error",
        errorReceivedMessage(
          "there was an error updating the price.",
          updateOptionPriceError
        ),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetUpdateOptionPriceResult());
          dispatch(resetUpdateOptionPriceError());
        }
      });
    }
  }, [
    updateOptionPriceResult,
    updateOptionPriceError,
    fireSwal,
    dispatch,
    resetInputs,
  ]);
};

export default useUpdateOptionPriceResultUseEffect;
