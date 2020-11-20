function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj;
}

export default function getCssFromDisplayProps<T, C>(props: T, styles: C) {
  let css = '';
  Object.keys(props).forEach(prop => {
    if (hasKey(props, prop) && props[prop] && hasKey(styles, prop)) {
      css += styles[prop];
    }
  });
  return css;
}
