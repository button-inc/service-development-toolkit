import styled from 'styled-components';

function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj;
}

const propClasses = {
  size: ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge'],
};

export default function getCssFromDisplayProps(props, themeStyles, combinedStyles) {
  let css = '';
  Object.keys(props).forEach(prop => {
    // If the theme creator did not define the prop, apply default
    if (!hasKey(themeStyles, prop)) {
      const propClass = Object.keys(propClasses).find(key => propClasses[key].includes(prop));
      const defaultClassProp = themeStyles['defaultProps'] && propClass && themeStyles['defaultProps'][propClass];
      css += combinedStyles[defaultClassProp];
    } else if (hasKey(props, prop) && props[prop]) {
      css += combinedStyles[prop];
    }
  });
  return css;
}
// See https://www.typescriptlang.org/docs/handbook/generics.html#generic-constraints for Props extends object
export function applyThemeFactory<S, Props extends object>(defaultStyles, baseInput) {
  const applyTheme = (userStyles: S) => {
    const stylesToApply = { ...defaultStyles, ...userStyles };

    const defaultCheckbox = styled(baseInput)`
      ${stylesToApply.shared}
    `;

    return styled(defaultCheckbox)<Props>`
      ${(props: Props) => {
        return getCssFromDisplayProps(props, userStyles, stylesToApply);
      }}
    `;
  };
  return applyTheme;
}

export function styleElement(tag: string, stylesToApply: any, type: string) {
  const sharedStyles = stylesToApply.shared || {};

  return styled[tag]`
    ${(props: any) => {
      const sizeProp = (stylesToApply[props.size] && props.size) || stylesToApply.defaultProps?.size;
      const variantProp = (stylesToApply[props.variant] && props.variant) || stylesToApply.defaultProps?.variant;

      return (
        (sharedStyles[type] || '') +
        ((stylesToApply[sizeProp] && stylesToApply[sizeProp][type]) || '') +
        ((stylesToApply[variantProp] && stylesToApply[variantProp][type]) || '')
      );
    }}
  `;
}
