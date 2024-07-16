import useFireSwal from "./use-fire-swal";

import { invalidEmailErrorMessage } from "../strings/errors/errors-strings";
const useShowInvalidEmailMessageSwal = () => {
  const { fireSwal } = useFireSwal();

  const showInvalidEmailMessageSwal = () => {
    fireSwal("error", invalidEmailErrorMessage, "", 0, true, false);
  };

  return { showInvalidEmailMessageSwal };
};

export default useShowInvalidEmailMessageSwal;
