import styled from 'styled-components';
import isString from 'lodash/isString';
import pickBy from 'lodash/pickBy';

const generateId = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const staticStyles = {
  fullWidth: `width:100%;`,
  fullHeight: `height:100%;`,
};

// Using this to pull off style related static props. If including non-style props, will need refactor
export const staticProps = Object.keys(staticStyles);

export const getStyleKeys = styles => {
  const { shared = {}, ...others } = styles;
  return Object.keys(others);
};

export function createStyleBuilder(styles: any, config: any) {
  const { shared = {}, ...others } = styles;
  const defaultProps = config.defaultProps || {};
  const staticProps = config.staticProps || [];

  const styleKeys = Object.keys(others);

  const isTrue = (props: object, key: string): boolean => {
    if (props[key] === false) return false;
    if (props[key] === true || defaultProps[key] === true) return true;
    return false;
  };

  return function (tag: string, type: string) {
    return styled[tag]`
      ${(props: any) => {
        let styles = shared[type] || '';

        staticProps.forEach(key => {
          if (isTrue(props, key)) styles += staticStyles[key];
        });

        styleKeys.forEach(key => {
          const style = others[key];
          if (isString(style)) {
            if (isTrue(props, key)) styles += style;
            return;
          }

          const values = Object.keys(style);
          const first = values[0];

          if (isString(style[first])) {
            if (isTrue(props, key)) styles += style[type] || '';
          } else {
            let value = props[key];
            if (!style[value]) value = defaultProps[key] || first;
            styles += (style[value] && style[value][type]) || '';
          }
        });

        return styles;
      }}
    `;
  };
}

export function createBootstrap(styles: any, type: string) {
  const styleKeys = getStyleKeys(styles).concat(staticProps);

  return function (props: any) {
    let { id, name } = props;
    const { label, children, ...rest } = props;
    if (!id) {
      id = generateId();
    }

    if (!name) {
      name = `${id}-${type}`;
    }

    const ariaLabel = label || name;

    const styleProps = pickBy(rest, (_, propName) => styleKeys.includes(propName));

    return { id, name, label, ariaLabel, styleProps, children, rest };
  };
}
