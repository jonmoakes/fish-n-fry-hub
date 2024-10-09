import { useDispatch } from "react-redux";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import { setProductToAdd } from "../../../store/database-management/database-management.slice";

import { collectionsAttributeData } from "../collections-attribute-data";

const useCreateProductLogic = () => {
  const { productToAdd, category } = useGetDatabaseManagementSelectors();

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value, name } = event.target;
    dispatch(setProductToAdd({ ...productToAdd, [name]: value }));
  };

  const handleChangeCheckbox = (event) => {
    const { name, checked } = event.target;
    dispatch(setProductToAdd({ ...productToAdd, [name]: checked }));
  };

  const attributes = Object.keys(productToAdd).length
    ? collectionsAttributeData.find(
        (collection) => collection.collectionName === productToAdd.category
      )?.attributes
    : null;

  return {
    handleChange,
    attributes,
    category,
    productToAdd,
    handleChangeCheckbox,
  };
};

export default useCreateProductLogic;
