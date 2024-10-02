import { useState } from "react";
import { useDispatch } from "react-redux";
import useGetMenuSelectors from "../../../hooks/selectors/use-get-menu-selectors";

import { setProductToEdit } from "../../../store/database-management/database-management.slice";

const useManageMenuLogic = () => {
  const { menuDocuments } = useGetMenuSelectors();

  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleSearchInputChange = (event) => {
    setInputText(event.target.value);
  };

  const clearSearch = () => {
    setInputText("");
  };

  const addProductToEdit = (doc) => {
    dispatch(setProductToEdit(doc));
  };

  const filteredDocuments =
    inputText && menuDocuments.length
      ? menuDocuments.filter((item) => item.name.includes(inputText))
      : [];

  return {
    inputText,
    handleSearchInputChange,
    clearSearch,
    menuDocuments,
    filteredDocuments,
    addProductToEdit,
  };
};

export default useManageMenuLogic;
