const useUpdateDocumentFunctions = () => {
  const stringHasUpperCaseLetters = (stringValue) => {
    if (/[A-Z]/.test(stringValue)) {
      return true;
    } else {
      return false;
    }
  };

  const invalidPhoneNumberLength = (number) => {
    if (number.length !== 11) {
      return true;
    } else {
      return false;
    }
  };

  const invalidDocumentIdLength = (id) => {
    if (id.length !== 20) {
      return true;
    } else {
      return false;
    }
  };

  const valueStartsOrEndsWithSpace = (string) => {
    if (string.startsWith(" ") || string.endsWith(" ")) {
      return true;
    } else {
      return false;
    }
  };

  return {
    stringHasUpperCaseLetters,
    valueStartsOrEndsWithSpace,
    invalidDocumentIdLength,
    invalidPhoneNumberLength,
  };
};

export default useUpdateDocumentFunctions;
