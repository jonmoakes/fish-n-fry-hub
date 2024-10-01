import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetMenuSelectors from "../../../hooks/selectors/use-get-menu-selectors";
import { fetchMenuDocumentsAsync } from "../../../store/menu/menu-thunks";

const useFetchMenu = () => {
  const { menuError } = useGetMenuSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (menuError) return;
    dispatch(fetchMenuDocumentsAsync());
  }, [dispatch, menuError]);
};

export default useFetchMenu;
