import styled from 'styled-components';

const staticStyles = {
  fullWidth: `width:100%;`,
  fullHeight: `height:100%;`,
};

const staticProps = Object.keys(staticStyles);

export function getStyleBuilder(stylesToApply: any, allowedProps: string[]) {
  const sharedStyles = stylesToApply.shared || {};
  const defaultProps = stylesToApply.defaultProps || {};

  return function (tag: string, type: string) {
    return styled[tag]`
      ${(props: any) => {
        let styles = sharedStyles[type] || '';

        allowedProps.forEach(key => {
          if (staticProps.includes(key)) {
            if (props[key] === false) return;
            if (props[key] === true || defaultProps[key] === true) styles += staticStyles[key];
          } else {
            const prop = (stylesToApply[props[key]] && props[key]) || defaultProps[key];
            styles += (stylesToApply[prop] && stylesToApply[prop][type]) || '';
          }
        });

        return styles;
      }}
    `;
  };
}

export function createStyleBuilder(styles: any, config: any) {
  const { shared = {}, ...others } = styles;
  const defaultProps = config.defaultProps || {};
  const staticProps = config.staticProps || [];

  const styleKeys = Object.keys(others);

  return function (tag: string, type: string) {
    return styled[tag]`
      ${(props: any) => {
        let styles = shared[type] || '';

        staticProps.forEach(key => {
          if (props[key] === false) return;
          if (props[key] === true || defaultProps[key] === true) styles += staticStyles[key];
        });

        styleKeys.forEach(key => {
          const style = others[key];
          const values = Object.keys(style);
          let value = props[key];
          if (!style[value]) value = defaultProps[key] || values[0];
          styles += (style[value] && style[value][type]) || '';
        });

        return styles;
      }}
    `;
  };
}
