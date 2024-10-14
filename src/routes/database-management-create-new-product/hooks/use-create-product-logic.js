import { useDispatch } from "react-redux";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import {
  resetProductToAdd,
  setProductToAdd,
} from "../../../store/database-management/database-management.slice";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { confirmChangeCategoryMessage } from "../../../strings/confirms/confirms-strings";

import { collectionsAttributeData } from "../collections-attribute-data";

const useCreateProductLogic = () => {
  const { productToAdd, category, databaseManagementIsLoading } =
    useGetDatabaseManagementSelectors();

  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();

  const {
    hasSizeOption,
    sizeOptionMediumPrice,
    sizeOptionLargePrice,
    sizeOptionDoublePrice,
    sizeOptionTriplePrice,
    hasSaucesOption,
    numberOfSaucesAvailable,
    hasCondimentsOption,
    numberOfCondimentsAvailable,
    hasMeatsOption,
    numberOfMeatsAvailable,
  } = productToAdd ?? {};

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

  const requiredFieldsCheckPassed = attributes
    ? attributes.every((attribute) => {
        if (attribute.required) {
          // This checks if the corresponding value in productToAdd exists (i.e., it’s not undefined, null, or an empty string).
          // Returns true: if the value is defined, not null, and not an empty string.
          // Returns false: if the value is undefined, null, or an empty string.
          const value = productToAdd[attribute.attributeName];
          return value !== undefined && value !== null && value !== "";
        }
        return true; // If not required, it's considered valid
      })
    : false; // Return false if there are no attributes

  const hasSizeError =
    hasSizeOption &&
    !sizeOptionMediumPrice &&
    !sizeOptionLargePrice &&
    !sizeOptionTriplePrice &&
    !sizeOptionDoublePrice &&
    true;

  const hasSaucesError =
    hasSaucesOption &&
    numberOfSaucesAvailable !== "1" &&
    numberOfSaucesAvailable !== "3" &&
    true;

  const hasCondimentsError =
    hasCondimentsOption &&
    numberOfCondimentsAvailable !== "1" &&
    numberOfCondimentsAvailable !== "2" &&
    true;

  const hasMeatsError =
    hasMeatsOption && numberOfMeatsAvailable !== "2" && true;

  return {
    databaseManagementIsLoading,
    handleChange,
    attributes,
    category,
    productToAdd,
    handleChangeCheckbox,
    confirmChangeCategory,
    requiredFieldsCheckPassed,
    hasSizeError,
    hasSaucesError,
    hasCondimentsError,
    hasMeatsError,
  };
};

export default useCreateProductLogic;
