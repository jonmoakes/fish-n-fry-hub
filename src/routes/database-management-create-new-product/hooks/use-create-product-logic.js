import { useDispatch } from "react-redux";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import {
  resetProductToAdd,
  setProductToAdd,
} from "../../../store/database-management/database-management.slice";

import useCreateProductSaucesCheck from "./attribute-checks/use-create-product-sauces-check";
import useRequiredFieldsFilledCheck from "./attribute-checks/use-required-fields-filled-check";
import useCreateProductSizesCheck from "./attribute-checks/use-create-product-sizes-check";
import useCreateProductCondimentsCheck from "./attribute-checks/use-create-product-condiments-check";
import useCreateProductMeatsCheck from "./attribute-checks/use-create-product-meats-check";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { confirmChangeCategoryMessage } from "../../../strings/confirms/confirms-strings";

import { collectionsAttributeData } from "../collections-attribute-data";

const useCreateProductLogic = () => {
  const { productToAdd, category, databaseManagementIsLoading } =
    useGetDatabaseManagementSelectors();
  const { allRequiredFieldsFilled } = useRequiredFieldsFilledCheck();
  const { sizesOptionCheckPassed } = useCreateProductSizesCheck();
  const { saucesOptionCheckPassed } = useCreateProductSaucesCheck();
  const { condimentsOptionCheckPassed } = useCreateProductCondimentsCheck();
  const { meatsOptionCheckPassed } = useCreateProductMeatsCheck();

  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();

  const attributes = Object.keys(productToAdd).length
    ? collectionsAttributeData.find(
        (collection) => collection.collectionName === productToAdd.category
      )?.attributes
    : null;

  const handleChange = (event) => {
    let { value, name } = event.target;
    if (!value) {
      value = null;
      dispatch(setProductToAdd({ ...productToAdd, [name]: value }));
    } else {
    }
    dispatch(setProductToAdd({ ...productToAdd, [name]: value }));
  };

  const handleChangeCheckbox = (event) => {
    const { name, checked } = event.target;

    const resetSizePrices = (sizesToReset) => {
      const newProductToAdd = { ...productToAdd, [name]: checked };
      sizesToReset.forEach((size) => {
        newProductToAdd[size] = null;
      });
      dispatch(setProductToAdd(newProductToAdd));
    };

    if (name === "hasSaucesOption" && !checked) {
      dispatch(
        setProductToAdd({
          ...productToAdd,
          [name]: checked,
          numberOfSaucesAvailable: null,
        })
      );
    } else if (name === "hasCondimentsOption" && !checked) {
      dispatch(
        setProductToAdd({
          ...productToAdd,
          [name]: checked,
          numberOfCondimentsAvailable: null,
        })
      );
    } else if (name === "hasMeatsOption" && !checked) {
      dispatch(
        setProductToAdd({
          ...productToAdd,
          [name]: checked,
          numberOfMeatsAvailable: null,
        })
      );
    } else if (name === "hasSizeOption" && !checked) {
      const sizesToReset = [];

      if (productToAdd.sizeOptionDoublePrice)
        sizesToReset.push("sizeOptionDoublePrice");
      if (productToAdd.sizeOptionTriplePrice)
        sizesToReset.push("sizeOptionTriplePrice");
      if (productToAdd.sizeOptionMediumPrice)
        sizesToReset.push("sizeOptionMediumPrice");
      if (productToAdd.sizeOptionLargePrice)
        sizesToReset.push("sizeOptionLargePrice");

      if (sizesToReset.length > 0) {
        resetSizePrices(sizesToReset);
      } else {
        dispatch(setProductToAdd({ ...productToAdd, [name]: checked }));
      }
    } else {
      dispatch(setProductToAdd({ ...productToAdd, [name]: checked }));
    }
  };

  const confirmChangeCategory = () => {
    confirmSwal(
      confirmChangeCategoryMessage,
      "",
      "change category",
      "",
      () => dispatch(resetProductToAdd()),
      null
    );
  };

  const allChecksPassed = () => {
    return (
      allRequiredFieldsFilled(attributes, productToAdd) &&
      sizesOptionCheckPassed(attributes, productToAdd) &&
      saucesOptionCheckPassed(attributes, productToAdd) &&
      condimentsOptionCheckPassed(attributes, productToAdd) &&
      meatsOptionCheckPassed(attributes, productToAdd)
    );
  };

  return {
    databaseManagementIsLoading,
    handleChange,
    attributes,
    category,
    productToAdd,
    handleChangeCheckbox,
    confirmChangeCategory,
    allChecksPassed,
  };
};

export default useCreateProductLogic;
