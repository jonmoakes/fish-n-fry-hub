const useCreateProductMeatsCheck = () => {
  const meatsOptionCheckPassed = (attributes, productToAdd) => {
    const attributesIncludesHasMeatsOption = attributes.some(
      (attribute) => attribute.attributeName === "hasMeatsOption"
    );

    // all should return true.
    // 1 doesn't include hasMeatsOption attribute.
    // 2: has the hasMeatsOption but it hasn't been checked or unchecked yet.
    // 3: has the hasMeatsOption and it has been checked then unchecked.
    // 4: has the hasMeatsOption and it has been checked and the numberOfMeatsAvailable is 1 or 2
    return (
      !attributesIncludesHasMeatsOption ||
      (attributesIncludesHasMeatsOption &&
        !productToAdd.hasOwnProperty("hasMeatsOption")) ||
      (attributesIncludesHasMeatsOption &&
        productToAdd.hasOwnProperty("hasMeatsOption") &&
        productToAdd.hasMeatsOption === false) ||
      (attributesIncludesHasMeatsOption &&
        productToAdd.hasOwnProperty("hasMeatsOption") &&
        productToAdd.hasMeatsOption === true &&
        (productToAdd.numberOfMeatsAvailable === "1" ||
          productToAdd.numberOfMeatsAvailable === "2"))
    );
  };

  return { meatsOptionCheckPassed };
};

export default useCreateProductMeatsCheck;
