export const removeImportant = css => {
  return css.replace(' !important', '');
};

const getTextBetweenBrackets = string => {
  const firstIndex = string.indexOf('{');
  const secondIndex = string.indexOf('}');
  return string.substring(firstIndex + 1, secondIndex).trim();
};

export const changeSelectorToObject = css => {
  const stylesObject: any = {};
  stylesObject.base = removeImportant(css.split('&:')[0].trim());
  if (css.match('&:active')) {
    stylesObject.active = removeImportant(getTextBetweenBrackets(css.split('&:active')[1]));
  }
  if (css.match('&:focus')) {
    stylesObject.focus = removeImportant(getTextBetweenBrackets(css.split('&:focus')[1]));
  }
  if (css.match('&:hover')) {
    stylesObject.hover = removeImportant(getTextBetweenBrackets(css.split('&:hover')[1]));
  }
  return stylesObject;
};
