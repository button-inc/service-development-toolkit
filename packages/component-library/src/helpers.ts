import styled from 'styled-components';

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

export function applyThemeFactory<S, Props>(defaultStyles, baseInput) {
  const applyTheme = (styles: S) => {
    const stylesToApply = { ...defaultStyles, ...styles };

    const defaultCheckbox = styled(baseInput)`
      ${stylesToApply.shared}
    `;

    return styled(defaultCheckbox)`
      ${(props: Props) => {
        return getCssFromDisplayProps<Props, S>(props, stylesToApply);
      }}
    `;
  };
  return applyTheme;
}
