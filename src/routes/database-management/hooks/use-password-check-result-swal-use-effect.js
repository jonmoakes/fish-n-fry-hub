import { useEffect } from "react";
import { useDispatch } from "react-redux";

import usePasswordCheckLogic from "./use-password-check-logic";
import useFireSwal from "../../../hooks/use-fire-swal";
import { resetPasswordForDbAccessResult } from "../../../store/database-management/database-management.slice";

import { dbAccessPasswordError } from "../../../strings/errors/errors-strings";

const usePasswordCheckResultSwalUseEffect = () => {
  const { passwordForDbAccessResult } = usePasswordCheckLogic();
  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

  useEffect(() => {
    if (passwordForDbAccessResult !== "failure") return;

    fireSwal("error", dbAccessPasswordError, "", 0, true, false).then(
      (isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetPasswordForDbAccessResult());
        }
      }
    );
  }, [passwordForDbAccessResult, fireSwal, dispatch]);
};

export default usePasswordCheckResultSwalUseEffect;
