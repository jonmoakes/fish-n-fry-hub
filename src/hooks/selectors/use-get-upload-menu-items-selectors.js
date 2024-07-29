import { useSelector } from "react-redux";

import { selectUploadMenuItemsSelectors } from "../../store/upload-menu-items/upload-menu-items.slice";

const useGetMenuSelectors = () => {
  const { uploadMenuItemsIsLoading, uploadMenuItemsError } = useSelector(
    selectUploadMenuItemsSelectors
  );

  return {
    uploadMenuItemsIsLoading,
    uploadMenuItemsError,
  };
};

export default useGetMenuSelectors;
