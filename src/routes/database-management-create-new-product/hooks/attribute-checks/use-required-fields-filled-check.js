const useRequiredFieldsFilledCheck = () => {
  // If any required attribute has a value that is undefined, null, or an empty string, every() will return false immediately. Otherwise, it will return true if all checks pass.
  const allRequiredFieldsFilled = (attributes, productToAdd) => {
    return attributes
      ? attributes.every((attribute) => {
          if (attribute.required) {
            // The function checks if the corresponding value in productToAdd exists (i.e., it’s not undefined, null, or an empty string).
            // Returns true: if the value is defined, not null, and not an empty string.
            // Returns false: if the value is undefined, null, or an empty string.
            const value = productToAdd[attribute.attributeName];
            return value !== undefined && value !== null && value !== "";
          }
          return true; // If not required, it's considered valid
        })
      : false; // Return false if there are no attributes
  };

  return { allRequiredFieldsFilled };
};

export default useRequiredFieldsFilledCheck;
