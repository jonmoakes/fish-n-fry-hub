export const getMultipleChoiceSelectionString = (optionObject) => {
  const safeObj = optionObject ?? {};
  const choicesChosen = Object.keys(safeObj).filter((key) => safeObj[key]);
  return choicesChosen.join(`,\n`);
};
