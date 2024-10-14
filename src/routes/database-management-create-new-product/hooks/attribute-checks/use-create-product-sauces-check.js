const useCreateProductSaucesCheck = () => {
  const saucesOptionCheckPassed = (attributes, productToAdd) => {
    const attributesIncludesHasSaucesOption = attributes.some(
      (attribute) => attribute.attributeName === "hasSaucesOption"
    );

    // all should return true.
    // 1 doesn't include hasSaucesOption attribute.
    // 2: has the hasSaucesOption but it hasn't been checked or unchecked yet.
    // 3: has the hasSaucesOption and it has been checked then unchecked.
    // 4: has the hasSaucesOption and it has been checked and the numberOfSaucesAvailable is 1 or 3
    return (
      !attributesIncludesHasSaucesOption ||
      (attributesIncludesHasSaucesOption &&
        !productToAdd.hasOwnProperty("hasSaucesOption")) ||
      (attributesIncludesHasSaucesOption &&
        productToAdd.hasOwnProperty("hasSaucesOption") &&
        productToAdd.hasSaucesOption === false) ||
      (attributesIncludesHasSaucesOption &&
        productToAdd.hasOwnProperty("hasSaucesOption") &&
        productToAdd.hasSaucesOption === true &&
        (productToAdd.numberOfSaucesAvailable === "1" ||
          productToAdd.numberOfSaucesAvailable === "3"))
    );
  };

  return { saucesOptionCheckPassed };
};

export default useCreateProductSaucesCheck;
