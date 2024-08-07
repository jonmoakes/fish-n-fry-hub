export const replacePartOfString = (
  variableName,
  partOfStringToReplace,
  dataToReplaceWith
) => {
  return variableName && variableName.includes(partOfStringToReplace)
    ? variableName.replace(partOfStringToReplace, dataToReplaceWith)
    : variableName;
};
