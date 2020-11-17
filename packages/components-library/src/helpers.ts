export default function getCssFromDisplayProps(props, componentType: string, propsList: string[]) {
  let css = '';
  propsList.forEach(prop => {
    if (props[prop]) {
      css += props.theme[componentType][prop];
    }
  });
  return css;
}
