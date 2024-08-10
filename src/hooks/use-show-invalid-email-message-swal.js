import useFireSwal from "./use-fire-swal";

import { invalidEmailErrorMessage } from "../strings/errors/errors-strings";
const useShowInvalidEmailMessageSwal = () => {
  const { fireSwal } = useFireSwal();

  const showInvalidEmailMessageSwal = () => {
    fireSwal(
      "error",
      invalidEmailErrorMessage,
      "",
      false,
      "",
      false,
      "",
      false
    );
  };

  return { showInvalidEmailMessageSwal };
};

export default useShowInvalidEmailMessageSwal;
