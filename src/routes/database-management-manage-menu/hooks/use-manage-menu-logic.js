import { useState } from "react";
import { useDispatch } from "react-redux";

import useGetMenuSelectors from "../../../hooks/selectors/use-get-menu-selectors";
import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import { setProductToEdit } from "../../../store/database-management/database-management.slice";

const useManageMenuLogic = () => {
  const { menuDocuments, menuError, menuIsLoading } = useGetMenuSelectors();
  const {
    databaseManagementIsLoading,
    productToEdit,
    updateAttributeResult,
    updateAttributeError,
    deleteDocumentResult,
    deleteDocumentError,
  } = useGetDatabaseManagementSelectors();

  const {
    $id,
    $collectionId,
    name,

    price,
    sizeOptionMediumPrice,
    sizeOptionLargePrice,
    sizeOptionDoublePrice,
    sizeOptionTriplePrice,
  } = productToEdit ?? {};

  const [inputText, setInputText] = useState("");
  const [newValue, setNewValue] = useState("");
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

  const handleAttributeChange = (event) => {
    setNewValue(event.target.value);
  };

  const filteredDocuments =
    inputText && menuDocuments.length
      ? menuDocuments.filter((item) =>
          item.name.toLowerCase().includes(inputText.toLowerCase())
        )
      : [];

  return {
    menuError,
    menuIsLoading,
    databaseManagementIsLoading,
    inputText,
    handleSearchInputChange,
    clearSearch,
    menuDocuments,
    filteredDocuments,
    addProductToEdit,
    productToEdit,
    $id,
    $collectionId,
    name,
    price,
    sizeOptionMediumPrice,
    sizeOptionLargePrice,
    sizeOptionDoublePrice,
    sizeOptionTriplePrice,
    handleAttributeChange,
    newValue,
    updateAttributeResult,
    updateAttributeError,
    deleteDocumentResult,
    deleteDocumentError,
  };
};

export default useManageMenuLogic;
