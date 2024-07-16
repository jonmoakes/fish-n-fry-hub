import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "./selectors/use-get-current-user-selectors";

import { getUserOnLoadAsync } from "../store/user/user.thunks";

const useGetUserOnLoadThunkUseEffect = () => {
  const { currentUser } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) return;
    dispatch(getUserOnLoadAsync());
  }, [dispatch, currentUser]);
};

export default useGetUserOnLoadThunkUseEffect;
