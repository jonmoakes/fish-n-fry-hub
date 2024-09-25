import { useNavigate } from "react-router-dom";

import useConfirmSwal from "../../hooks/use-confirm-swal";

import {
  areYouSureMessage,
  imSureMessage,
} from "../../strings/confirms/confirms-strings";
import { loseAllDataMessage } from "../../strings/info/info-strings";

const useBackButton = () => {
  const { confirmSwal } = useConfirmSwal();

  const navigate = useNavigate();

  const confirmGoBack = () => {
    const confirmResult = () => {
      navigate(-1);
    };
    confirmSwal(
      areYouSureMessage,
      loseAllDataMessage,
      imSureMessage,
      "go back",
      confirmResult,
      null
    );
  };

  return { confirmGoBack };
};

export default useBackButton;
