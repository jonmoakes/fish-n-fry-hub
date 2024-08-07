export const replacePartOfString = (
  variableName,
  pieceToReplace,
  dataToReplaceWith
) => {
  return variableName && variableName.includes(pieceToReplace)
    ? variableName.replace(pieceToReplace, dataToReplaceWith)
    : variableName;
};
