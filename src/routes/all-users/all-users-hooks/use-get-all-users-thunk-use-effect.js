import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { getAllUsersAsync } from "../../../store/get-all-users/get-all-users.thunks";

const useGetAllUsersThunkUseEffect = () => {
  const { currentUser, id } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;
    dispatch(getAllUsersAsync({ id }));
  }, [id, dispatch, currentUser]);
};

export default useGetAllUsersThunkUseEffect;
