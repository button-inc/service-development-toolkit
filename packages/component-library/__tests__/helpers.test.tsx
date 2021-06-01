import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { processStyle, createStyleBuilder, createBootstrap } from '../src/helpers';
import 'regenerator-runtime/runtime';

describe('processStyle', () => {
  it('Should result the same with array styles', async () => {
    const style1 = processStyle({
      shared: {
        button: 'border-radius: 0.222em;border-width: 0;padding: 0.66em 1.77em;text-align: center;',
      },
    });

    const style2 = processStyle({
      shared: {
        button: ['border-radius: 0.222em;', 'border-width: 0;', 'padding: 0.66em 1.77em;', 'text-align: center;'],
      },
    });

    expect(style1).toEqual(style2);
  });
});

const styles = {
  shared: {
    container: `
      color: blue;
    `,
  },
  variant: {
    secondary: {
      container: `
        font-size: 2rem;
      `,
    },
    primary: {
      container: `
        font-size: 1rem;
        color: red;
      `,
    },
  },
  flex: {
    container: `display: flex;`,
  },
  disabled: `
    background: grey;
  `,
};

const config = {
  defaultProps: {},
  staticProps: ['fullHeight', 'fullWidth'],
  toggleable: true,
  breakProps: ['disabled'],
};

describe('create style builder', () => {
  const styleBuilder = createStyleBuilder(styles, config);
  const Section = styleBuilder('section', 'container');

  render(
    <>
      <Section id="no-props" />
      <Section id="primary" variant="primary" />
      <Section id="disabled-secondary" variant="secondary" disabled />
      <Section id="disabled" disabled />
      <Section id="with-static-props" fullHeight fullWidth />
    </>
  );

  const basicElement = document.getElementById('no-props');
  const primaryElement = document.getElementById('primary');
  const disabledElement = document.getElementById('disabled');
  const disabledSecondaryElement = document.getElementById('disabled-secondary');
  const staticPropsElement = document.getElementById('with-static-props');

  it('Applies the shared styles', () => {
    expect(basicElement).toHaveStyle('color: blue');
  });

  it('Overrides the shared style when an added variant overrides it', () => {
    expect(primaryElement).toHaveStyle('color: red');
  });

  it('Uses the first defined style if no default or user variant is defined', () => {
    expect(basicElement).toHaveStyle('font-size: 2rem');
  });

  it('Uses the users variant if added as a prop', () => {
    expect(primaryElement).toHaveStyle('font-size: 1rem');
  });

  it('Can use the defined static props', () => {
    expect(staticPropsElement).toHaveStyle('height: 100%');
    expect(staticPropsElement).toHaveStyle('width: 100%');
  });

  it('Will add styles for break props', () => {
    expect(disabledElement).toHaveStyle('background: grey');
  });

  it('Ignores all other styles when a break prop is added', () => {
    expect(disabledSecondaryElement).toHaveStyle('background: grey');
    expect(disabledSecondaryElement).not.toHaveStyle('font-size: 2rem');
  });

  it('Uses the default prop if user does not add one and the default is defined', () => {
    config.defaultProps = { variant: 'primary' };
    const styleBuilder = createStyleBuilder(styles, config);
    const Section = styleBuilder('section', 'container');

    render(<Section id="test" />);
    const element = document.getElementById('test');
    expect(element).toHaveStyle('font-size: 1rem');
  });

  it('works with boolean default props', () => {
    config.defaultProps = { flex: true };
    const styleBuilder = createStyleBuilder(styles, config);
    const Section = styleBuilder('section', 'container');

    render(<Section id="test" />);
    const element = document.getElementById('test');
    expect(element).toHaveStyle('display: flex;');
  });
});

describe('create bootstrap', () => {
  it('Adds a default name and id if not provided', () => {
    const bootstrap = createBootstrap(styles, 'input');
    const { id, name } = bootstrap({});
    expect(typeof name).toBe('string');
    expect(typeof id).toBe('string');
  });

  it('Uses the defined name and id if provided', () => {
    const bootstrap = createBootstrap(styles, 'input');
    const { id, name } = bootstrap({ name: 'name', id: 'id' });
    expect(name).toBe('name');
    expect(id).toBe('id');
  });

  it('Defaults the aria label to the name if label is not defined', () => {
    const bootstrap = createBootstrap(styles, 'input');
    const { ariaLabel } = bootstrap({ name: 'name' });
    expect(ariaLabel).toBe('name');
  });

  it('Returns all style props', () => {
    const bootstrap = createBootstrap(styles, 'input');
    const userStyleProps = { variant: 'primary', fullHeight: true, fullWidth: true };
    const { styleProps } = bootstrap({ name: 'name', ...userStyleProps });
    expect(styleProps).toEqual(userStyleProps);
  });
});
