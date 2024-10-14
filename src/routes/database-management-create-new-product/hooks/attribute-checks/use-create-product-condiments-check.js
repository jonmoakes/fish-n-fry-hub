const useCreateProductCondimentsCheck = () => {
  const condimentsOptionCheckPassed = (attributes, productToAdd) => {
    const attributesIncludesHasCondimentsOption = attributes.some(
      (attribute) => attribute.attributeName === "hasCondimentsOption"
    );

    // doesn't include hasCondimentsOption attribute.
    return (
      !attributesIncludesHasCondimentsOption ||
      (attributesIncludesHasCondimentsOption &&
        !productToAdd.hasOwnProperty("hasCondimentsOption")) ||
      // has the condiments option and user must have checked it and then unchecked it which will make the property value false (which is still valid).
      (attributesIncludesHasCondimentsOption &&
        productToAdd.hasOwnProperty("hasCondimentsOption") &&
        productToAdd.hasCondimentsOption === false) ||
      // has hasCondimentsOption and it's true, plus numberOfCondimentsAvailable is 1 or 2
      (attributesIncludesHasCondimentsOption &&
        productToAdd.hasOwnProperty("hasCondimentsOption") &&
        productToAdd.hasCondimentsOption === true &&
        (productToAdd.numberOfCondimentsAvailable === "1" ||
          productToAdd.numberOfCondimentsAvailable === "2"))
    );
  };

  return { condimentsOptionCheckPassed };
};

export default useCreateProductCondimentsCheck;
