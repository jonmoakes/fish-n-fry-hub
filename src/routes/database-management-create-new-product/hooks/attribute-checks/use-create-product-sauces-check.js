const useCreateProductSaucesCheck = () => {
  const saucesOptionCheckPassed = (attributes, productToAdd) => {
    const attributesIncludesHasSaucesOption = attributes.some(
      (attribute) => attribute.attributeName === "hasSaucesOption"
    );

    // doesn't include hasSaucesOption attribute.
    return (
      !attributesIncludesHasSaucesOption ||
      (attributesIncludesHasSaucesOption &&
        !productToAdd.hasOwnProperty("hasSaucesOption")) ||
      // has the sauce option and user must have checked it and then unchecked it which will make the property value false (which is still valid).
      (attributesIncludesHasSaucesOption &&
        productToAdd.hasOwnProperty("hasSaucesOption") &&
        productToAdd.hasSaucesOption === false) ||
      // has hasSaucesOption and it's true, plus numberOfSaucesAvailable is 1 or 3
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
