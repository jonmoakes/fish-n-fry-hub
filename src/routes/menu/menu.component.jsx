import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import useGetMenuSelectors from "../../hooks/selectors/use-get-menu-selectors";
import { fetchMenuDocumentsAsync } from "../../store/menu/menu-thunks";

import CategorySelection from "../category-selection/category-selection.component";
import ChosenCategory from "../chosen-category/chosen-category.component";

const Menu = () => {
  const { menuDocuments, menuError } = useGetMenuSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (menuError || (menuDocuments && menuDocuments.length)) return;

    dispatch(fetchMenuDocumentsAsync());
  }, [menuError, menuDocuments, dispatch]);

  return (
    <Routes>
      <Route index element={<CategorySelection />} />
      <Route path=":category" element={<ChosenCategory />} />
    </Routes>
  );
};

export default Menu;
