const useCreateProductSizesCheck = () => {
  const sizesOptionCheckPassed = (attributes, productToAdd) => {
    const collectionAttributesIncludesHasSizeOption = attributes.some(
      (attribute) => attribute.attributeName === "hasSizeOption"
    );

    return (
      !collectionAttributesIncludesHasSizeOption ||
      (collectionAttributesIncludesHasSizeOption &&
        !productToAdd.hasOwnProperty("hasSizeOption")) ||
      (collectionAttributesIncludesHasSizeOption &&
        productToAdd.hasOwnProperty("hasSizeOption"))
    );
  };

  return { sizesOptionCheckPassed };
};

export default useCreateProductSizesCheck;
